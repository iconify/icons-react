import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aww2hc3xd.css';
import '../../css/d/d3halac9m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aww2hc3xd"/><path class="d3halac9m"/>`,
		"fallback": "energy-icons:connector-type2-20-bold",
	});
}

export default Component;
