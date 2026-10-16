import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvnnf13zd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvnnf13zd"/>`,
		"fallback": "energy-icons:cloud-sun-rain-20",
	});
}

export default Component;
