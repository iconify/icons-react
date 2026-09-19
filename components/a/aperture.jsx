import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j9v1vejoh.css';
import '../../css/z/z44w2acsf.css';
import '../../css/y/ysfgnrezj.css';
import '../../css/i/i1t5euwqz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="j9v1vejoh"/><path class="z44w2acsf"/><path class="ysfgnrezj"/><path class="i1t5euwqz"/></g>`,
		"fallback": "glyphs:aperture",
	});
}

export default Component;
