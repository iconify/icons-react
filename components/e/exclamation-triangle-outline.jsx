import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nhxp2qbof.css';
import '../../css/g/gmf6vccax.css';
import '../../css/s/svv-jlbua.css';
import '../../css/v/vb2jx8bzd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nhxp2qbof"/><path clip-rule="evenodd" class="gmf6vccax"/><path class="svv-jlbua"/><path clip-rule="evenodd" class="vb2jx8bzd"/></g>`,
		"fallback": "glyphs:exclamation-triangle-outline",
	});
}

export default Component;
