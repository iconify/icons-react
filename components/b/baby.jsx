import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/azm5fdbvj.css';
import '../../css/j/joiookbjd.css';
import '../../css/m/mzlwi6b_o.css';
import '../../css/a/aike50ajx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="azm5fdbvj"/><path class="joiookbjd"/><path class="mzlwi6b_o"/><path class="aike50ajx"/></g>`,
		"fallback": "glyphs:baby",
	});
}

export default Component;
