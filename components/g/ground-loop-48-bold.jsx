import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbgn9e5js.css';
import '../../css/t/tjum5_rgf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbgn9e5js"/><path class="tjum5_rgf"/>`,
		"fallback": "energy-icons:ground-loop-48-bold",
	});
}

export default Component;
