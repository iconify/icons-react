import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmhge1brw.css';
import '../../css/t/t8uvlebro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmhge1brw"/><path class="t8uvlebro"/>`,
		"fallback": "eva:code-download-outline",
	});
}

export default Component;
