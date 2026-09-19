import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pmvy1n31h.css';
import '../../css/n/n4mhsebtw.css';
import '../../css/n/nmx0hr7qx.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/w/w0ib10bhf.css';
import '../../css/f/fwuok9hlx.css';
import '../../css/b/bith4eshp.css';
import '../../css/h/hs72nzbpm.css';
import '../../css/r/r7cg3ersw.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pmvy1n31h"/><mask id="SVGcFaS5cXn" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path clip-rule="evenodd" class="n4mhsebtw"/></mask><g mask="url(#SVGcFaS5cXn)"><path clip-rule="evenodd" class="nmx0hr7qx"/><mask id="SVGxstoJcTy" width="28" height="20" x="2" y="2" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="w0ib10bhf"/><path clip-rule="evenodd" class="fwuok9hlx"/></mask><path clip-rule="evenodd" class="bith4eshp"/><path mask="url(#SVGxstoJcTy)" class="hs72nzbpm"/><path class="r7cg3ersw"/></g></g>`,
		"fallback": "flagpack:gb-wls",
	});
}

export default Component;
