import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjptc1oys.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjptc1oys"/>`,
		"fallback": "energy-icons:hot-spring-48",
	});
}

export default Component;
