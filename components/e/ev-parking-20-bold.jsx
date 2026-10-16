import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6forwbcg.css';
import '../../css/k/kh20glbaj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6forwbcg"/><path class="kh20glbaj"/>`,
		"fallback": "energy-icons:ev-parking-20-bold",
	});
}

export default Component;
