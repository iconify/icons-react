import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z9v4r7oiz.css';
import '../../css/r/rs0wrok6f.css';
import '../../css/m/mh99e_bbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z9v4r7oiz"/><path class="rs0wrok6f"/><path class="mh99e_bbl"/></g>`,
		"fallback": "andrsrxn:cloud-droplet",
	});
}

export default Component;
