import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t5oh21qle.css';
import '../../css/f/fweop44zq.css';
import '../../css/g/g57x7ynmz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t5oh21qle"/><path class="fweop44zq"/><path class="g57x7ynmz"/></g>`,
		"fallback": "glyphs:globe-stand-duo",
	});
}

export default Component;
