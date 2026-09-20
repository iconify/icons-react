import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9nyce0pg.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y1ukqlseo.css';
import '../../css/y/yfklh2ojo.css';
import '../../css/z/znr53cb0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGIhjvteUC" width="9" height="15" x="3" y="4" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path class="u9nyce0pg"/></mask><g class="ft5dv1b6b"><path class="y1ukqlseo"/><g mask="url(#SVGIhjvteUC)"><path class="yfklh2ojo"/></g><path class="znr53cb0t"/></g>`,
		"fallback": "lets-icons:book-open-alt-duotone",
	});
}

export default Component;
