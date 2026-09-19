import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/v1u3x77qg.css';
import '../../css/o/ohr5grb8d.css';
import '../../css/h/hs3xplndx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="v1u3x77qg"/><path class="ohr5grb8d"/><path class="hs3xplndx"/></g>`,
		"fallback": "glyphs-poly:bell",
	});
}

export default Component;
