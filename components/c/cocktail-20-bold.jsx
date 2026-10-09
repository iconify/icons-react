import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7zm0u_6f.css';
import '../../css/j/jiqi-hb6a.css';
import '../../css/x/xf-_f2-0r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7zm0u_6f"/><path class="jiqi-hb6a"/><path class="xf-_f2-0r"/>`,
		"fallback": "energy-icons:cocktail-20-bold",
	});
}

export default Component;
