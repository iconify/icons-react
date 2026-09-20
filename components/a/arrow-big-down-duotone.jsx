import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp3z83bzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zp3z83bzx"/>`,
		"fallback": "keyline-icons:arrow-big-down-duotone",
	});
}

export default Component;
