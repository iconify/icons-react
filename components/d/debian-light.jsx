import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n6m2w-bsk.css';
import '../../css/k/kzugat13e.css';
import '../../css/v/v27fkl62g.css';
import '../../css/j/j15ty4b9p.css';
import '../../css/g/gvb26tbkk.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGv3WPqdcU)"><path class="n6m2w-bsk"/><g clip-path="url(#SVG5qy9KbCN)"><path class="kzugat13e"/><path class="v27fkl62g"/></g></g><defs><clipPath id="SVGv3WPqdcU"><path class="j15ty4b9p"/></clipPath><clipPath id="SVG5qy9KbCN"><path class="gvb26tbkk"/></clipPath></defs></g>`,
		"fallback": "skill-icons:debian-light",
	});
}

export default Component;
