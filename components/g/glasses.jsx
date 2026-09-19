import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jqf3k5b0c.css';
import '../../css/o/oxysw7b-r.css';
import '../../css/k/k-0n1_78t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="jqf3k5b0c"/><path class="oxysw7b-r"/><path class="k-0n1_78t"/></g>`,
		"fallback": "glyphs:glasses",
	});
}

export default Component;
