import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nain0n-0j.css';
import '../../css/z/zr6oosbmg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nain0n-0j"/><path class="zr6oosbmg"/>`,
		"fallback": "energy-icons:crosshair-20-bold",
	});
}

export default Component;
