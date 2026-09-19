import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vpxhribda.css';
import '../../css/w/w3bp2bcky.css';
import '../../css/u/un6ecob_e.css';
import '../../css/q/qccfeuj6n.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vpxhribda"/><path class="w3bp2bcky"/><path class="un6ecob_e"/><path class="qccfeuj6n"/></g>`,
		"fallback": "glyphs:club-outline",
	});
}

export default Component;
