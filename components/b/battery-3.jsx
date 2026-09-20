import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef3dopb2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef3dopb2k"/>`,
		"fallback": "tabler:battery-3",
	});
}

export default Component;
