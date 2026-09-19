import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/actvrsxpz.css';
import '../../css/n/n4mhsebtw.css';
import '../../css/r/rhdgcbcdy.css';
import '../../css/e/e1p14dbee.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="actvrsxpz"/><mask id="SVGcFaS5cXn" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path clip-rule="evenodd" class="n4mhsebtw"/></mask><g mask="url(#SVGcFaS5cXn)"><path class="rhdgcbcdy"/><path clip-rule="evenodd" class="e1p14dbee"/></g></g>`,
		"fallback": "flagpack:cd",
	});
}

export default Component;
