import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dyk91zota.css';
import '../../css/c/cp4lmky5m.css';
import '../../css/k/khl_6qbmw.css';
import '../../css/j/jsr00m3kj.css';
import '../../css/w/wcj-r41ni.css';
import '../../css/e/er4khtape.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dyk91zota"/><path class="cp4lmky5m"/><path class="khl_6qbmw"/><path class="jsr00m3kj"/><path class="wcj-r41ni"/><path class="er4khtape"/></g>`,
		"fallback": "glyphs-poly:aperture",
	});
}

export default Component;
