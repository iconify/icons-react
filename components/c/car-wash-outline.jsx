import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/a0xx5x-li.css';
import '../../css/i/iyk_vub8h.css';
import '../../css/i/ieaxcrbun.css';
import '../../css/u/u3k67q4lu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="a0xx5x-li"/><path class="iyk_vub8h"/><path class="ieaxcrbun"/><path class="u3k67q4lu"/></g>`,
		"fallback": "glyphs:car-wash-outline",
	});
}

export default Component;
