import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hrqid2byd.css';
import '../../css/v/vlxnd1bvd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hrqid2byd"/><path class="vlxnd1bvd"/></g>`,
		"fallback": "glyphs:eye-lashes-duo",
	});
}

export default Component;
