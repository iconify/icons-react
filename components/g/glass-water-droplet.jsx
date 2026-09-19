import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q51ogv1zj.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q51ogv1zj"/>`,
		"fallback": "fa6-solid:glass-water-droplet",
	});
}

export default Component;
