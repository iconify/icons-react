import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n6m2w-bsk.css';
import '../../css/w/w4e9c_btr.css';
import '../../css/l/lbcg1yj2w.css';
import '../../css/s/sav6x4bmf.css';
import '../../css/g/g_gp7lgqe.css';
import '../../css/j/j15ty4b9p.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGv3WPqdcU)"><path class="n6m2w-bsk"/><path class="w4e9c_btr"/><path fill="url(#SVGFfkO6bVk)" class="lbcg1yj2w"/></g><defs><linearGradient id="SVGFfkO6bVk" x1="39228.9" x2="23538.7" y1="3347.5" y2="23660.6" gradientUnits="userSpaceOnUse"><stop offset=".18" class="sav6x4bmf"/><stop offset="1" class="g_gp7lgqe"/></linearGradient><clipPath id="SVGv3WPqdcU"><path class="j15ty4b9p"/></clipPath></defs></g>`,
		"fallback": "skill-icons:bitbucket-light",
	});
}

export default Component;
