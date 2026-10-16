import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-7qfebjm.css';
import '../../css/f/ff0-2zv2c.css';
import '../../css/e/egip2ibxz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-7qfebjm"/><path class="ff0-2zv2c"/><path class="egip2ibxz"/>`,
		"fallback": "energy-icons:gas-holder-20",
	});
}

export default Component;
