import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/ynqmrvbmv.css';
import '../../css/o/ou-f-vnmu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ynqmrvbmv"/><path class="ou-f-vnmu"/></g>`,
		"fallback": "quill:cog-alt",
	});
}

export default Component;
