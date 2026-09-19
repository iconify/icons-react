import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vsmssty8v.css';
import '../../css/b/bip-bacty.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vsmssty8v"/><path class="bip-bacty"/></g>`,
		"fallback": "glyphs:hammer-duo",
	});
}

export default Component;
