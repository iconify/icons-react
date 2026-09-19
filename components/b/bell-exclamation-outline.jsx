import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m_508sb5a.css';
import '../../css/e/e4e18qnfm.css';
import '../../css/j/jc5cgnf5h.css';
import '../../css/t/ttzpiac6h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m_508sb5a"/><path clip-rule="evenodd" class="e4e18qnfm"/><path class="jc5cgnf5h"/><path clip-rule="evenodd" class="ttzpiac6h"/></g>`,
		"fallback": "glyphs:bell-exclamation-outline",
	});
}

export default Component;
