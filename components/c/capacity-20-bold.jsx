import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wiabdabxj.css';
import '../../css/z/z_3gq8xqn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wiabdabxj"/><path class="z_3gq8xqn"/>`,
		"fallback": "energy-icons:capacity-20-bold",
	});
}

export default Component;
