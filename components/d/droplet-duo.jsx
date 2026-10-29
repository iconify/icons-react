import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/or8dn2mis.css';
import '../../css/b/b8357wzya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="or8dn2mis"/><path class="b8357wzya"/></g>`,
		"fallback": "withicons:droplet-duo",
	});
}

export default Component;
