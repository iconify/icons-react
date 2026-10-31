import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i858_pbtq.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k4ui9xrgk.css';
import '../../css/f/ft340sc3e.css';
import '../../css/d/d0gplzhje.css';
import '../../css/h/h0aallbkr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGXLnSbzwQ" width="49" height="49" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path class="i858_pbtq"/></mask><g mask="url(#SVGXLnSbzwQ)" class="ft5dv1b6b"><path class="k4ui9xrgk"/><path class="ft340sc3e"/><path class="d0gplzhje"/><path class="h0aallbkr"/></g>`,
		"fallback": "streamline-kameleon-color:cigarette-pop",
	});
}

export default Component;
