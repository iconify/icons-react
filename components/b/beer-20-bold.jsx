import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr0t6xbmu.css';
import '../../css/h/hviuulbfa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yr0t6xbmu"/><path class="hviuulbfa"/>`,
		"fallback": "energy-icons:beer-20-bold",
	});
}

export default Component;
