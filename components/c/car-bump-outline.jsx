import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/irwinbc_r.css';
import '../../css/w/wimlky-am.css';
import '../../css/c/ch1wpxbeu.css';
import '../../css/l/l5xzt3e9a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="irwinbc_r"/><path class="wimlky-am"/><path class="ch1wpxbeu"/><path class="l5xzt3e9a"/></g>`,
		"fallback": "glyphs:car-bump-outline",
	});
}

export default Component;
