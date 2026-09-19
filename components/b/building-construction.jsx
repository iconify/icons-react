import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx33p9m0y.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tx33p9m0y"/>`,
		"fallback": "dinkie-icons:building-construction",
	});
}

export default Component;
