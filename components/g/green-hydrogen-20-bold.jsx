import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9y2hdich.css';
import '../../css/m/maibb9b4m.css';
import '../../css/g/g9fwkabiz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9y2hdich"/><path class="maibb9b4m"/><path class="g9fwkabiz"/>`,
		"fallback": "energy-icons:green-hydrogen-20-bold",
	});
}

export default Component;
