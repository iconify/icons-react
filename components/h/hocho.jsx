import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vy34tx5ad.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vy34tx5ad"/>`,
		"fallback": "dinkie-icons:hocho",
	});
}

export default Component;
