import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qth_kc-mc.css';
import '../../css/f/f13syvb9a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qth_kc-mc"/><path class="f13syvb9a"/></g>`,
		"fallback": "glyphs:font-outline",
	});
}

export default Component;
