import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um9jo7bca.css';
import '../../css/r/r5ivvvbes.css';
import '../../css/r/r7w_ozowo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um9jo7bca"/><path class="r5ivvvbes"/><path class="r7w_ozowo"/>`,
		"fallback": "energy-icons:fire-engine-20",
	});
}

export default Component;
