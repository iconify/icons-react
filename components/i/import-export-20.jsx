import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9ls55b_f.css';
import '../../css/n/n0np7fbxk.css';
import '../../css/j/j1y330bee.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9ls55b_f"/><path class="n0np7fbxk"/><path class="j1y330bee"/>`,
		"fallback": "energy-icons:import-export-20",
	});
}

export default Component;
