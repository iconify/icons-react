import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzc1gb6wy.css';
import '../../css/q/qvjlz2b3k.css';
import '../../css/y/yfoxxnbix.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzc1gb6wy"/><path class="qvjlz2b3k"/><path class="yfoxxnbix"/>`,
		"fallback": "energy-icons:chemical-plant-20-bold",
	});
}

export default Component;
