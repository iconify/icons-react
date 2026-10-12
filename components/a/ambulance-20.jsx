import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um9jo7bca.css';
import '../../css/r/r5ivvvbes.css';
import '../../css/g/gj6i34ybh.css';
import '../../css/c/c49ot4bag.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um9jo7bca"/><path class="r5ivvvbes"/><path class="gj6i34ybh"/><path class="c49ot4bag"/>`,
		"fallback": "energy-icons:ambulance-20",
	});
}

export default Component;
