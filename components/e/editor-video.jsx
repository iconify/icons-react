import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oend9i0ag.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oend9i0ag"/>`,
		"fallback": "dashicons:editor-video",
	});
}

export default Component;
