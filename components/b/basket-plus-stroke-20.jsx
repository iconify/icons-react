import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvt-fvj0a.css';
import '../../css/h/hxwzeibnw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvt-fvj0a"/><path class="hxwzeibnw"/>`,
		"fallback": "garden:basket-plus-stroke-20",
	});
}

export default Component;
