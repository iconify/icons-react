import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bwdn0jbfj.css';
import '../../css/x/xd-jhwbrt.css';
import '../../css/s/s2-q4d05f.css';
import '../../css/c/crt3obbnh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="bwdn0jbfj"/><path class="xd-jhwbrt"/><path class="s2-q4d05f"/><path class="crt3obbnh"/></g>`,
		"fallback": "glyphs:grin-tears",
	});
}

export default Component;
