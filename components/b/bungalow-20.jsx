import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dy4ls9blv.css';
import '../../css/t/tihnfkx5z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dy4ls9blv"/><path class="tihnfkx5z"/>`,
		"fallback": "energy-icons:bungalow-20",
	});
}

export default Component;
