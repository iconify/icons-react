import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/ceaub_u1f.css';
import '../../css/l/l9lejiboz.css';
import '../../css/d/dpbi1eb5g.css';
import '../../css/h/hwy146b6k.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ceaub_u1f"/><path class="l9lejiboz"/><path class="dpbi1eb5g"/><path class="hwy146b6k"/></g>`,
		"fallback": "glyphs:house-water-outline",
	});
}

export default Component;
