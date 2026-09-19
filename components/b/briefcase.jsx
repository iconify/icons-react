import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/g55efo6fc.css';
import '../../css/i/ihk0gabkp.css';
import '../../css/u/uraiyuf6y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="g55efo6fc"/><path class="ihk0gabkp"/><path class="uraiyuf6y"/></g>`,
		"fallback": "glyphs:briefcase",
	});
}

export default Component;
