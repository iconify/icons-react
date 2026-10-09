import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7cj1cc1l.css';
import '../../css/e/exm6e72le.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7cj1cc1l"/><path class="exm6e72le"/>`,
		"fallback": "energy-icons:egg-20-bold",
	});
}

export default Component;
