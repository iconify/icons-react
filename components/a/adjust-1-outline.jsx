import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/i65b-zb5p.css';
import '../../css/c/c94wgvbbu.css';
import '../../css/i/icvgb0jgu.css';
import '../../css/h/hb6grdbys.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="i65b-zb5p"/><path class="c94wgvbbu"/><path class="icvgb0jgu"/><path class="hb6grdbys"/></g>`,
		"fallback": "glyphs:adjust-1-outline",
	});
}

export default Component;
