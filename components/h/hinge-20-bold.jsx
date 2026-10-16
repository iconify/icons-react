import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5u49bxgz.css';
import '../../css/n/n-rap1bom.css';
import '../../css/e/ehybfubeh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5u49bxgz"/><path class="n-rap1bom"/><path class="ehybfubeh"/>`,
		"fallback": "energy-icons:hinge-20-bold",
	});
}

export default Component;
