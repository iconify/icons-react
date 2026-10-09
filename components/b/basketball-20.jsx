import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw3xaacjo.css';
import '../../css/m/m50p6idie.css';
import '../../css/k/keaw_tt0r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw3xaacjo"/><path class="m50p6idie"/><path class="keaw_tt0r"/>`,
		"fallback": "energy-icons:basketball-20",
	});
}

export default Component;
