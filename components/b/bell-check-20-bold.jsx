import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w79r3bb5w.css';
import '../../css/b/btzvfmb9o.css';
import '../../css/s/sh06c0bcw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w79r3bb5w"/><path class="btzvfmb9o"/><path class="sh06c0bcw"/>`,
		"fallback": "energy-icons:bell-check-20-bold",
	});
}

export default Component;
