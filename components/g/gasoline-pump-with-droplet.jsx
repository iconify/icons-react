import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ju7wy1k8o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ju7wy1k8o"/>`,
		"fallback": "pinhead:gasoline-pump-with-droplet",
	});
}

export default Component;
