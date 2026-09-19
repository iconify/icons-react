import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tns3obmll.css';
import '../../css/r/rimbr1eku.css';
import '../../css/b/bnn-vab-g.css';
import '../../css/m/mdoyqib5n.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tns3obmll"/><path clip-rule="evenodd" class="rimbr1eku"/><path class="bnn-vab-g"/><path class="mdoyqib5n"/></g>`,
		"fallback": "glyphs-poly:industry",
	});
}

export default Component;
