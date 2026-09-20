import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci0wr3bjg.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/g/gx3i_zehf.css';
import '../../css/u/urwem0bdp.css';
import '../../css/h/hit3bi0-v.css';
import '../../css/z/znm7s6b3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGzgdBobCE" class="ci0wr3bjg"/></defs><mask id="SVGtNCHMdjs" class="n1mjunbsu"><use href="#SVGzgdBobCE"/></mask><mask id="SVGdDu8ikNp" width="22" height="6" x="1" y="15" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="gx3i_zehf"/><path class="urwem0bdp"/></mask><g class="hit3bi0-v"><use href="#SVGzgdBobCE" mask="url(#SVGtNCHMdjs)"/><path mask="url(#SVGdDu8ikNp)" class="znm7s6b3c"/></g>`,
		"fallback": "lets-icons:desktop",
	});
}

export default Component;
