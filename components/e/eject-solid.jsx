import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckhw15x6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckhw15x6j"/>`,
		"fallback": "mynaui:eject-solid",
	});
}

export default Component;
