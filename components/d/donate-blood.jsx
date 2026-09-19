import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j18uz8w9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j18uz8w9d"/>`,
		"fallback": "boxicons:donate-blood",
	});
}

export default Component;
