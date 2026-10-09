import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6z7-hvpd.css';
import '../../css/m/ms-gp00fr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6z7-hvpd"/><path class="ms-gp00fr"/>`,
		"fallback": "energy-icons:cooling-tower-20-bold",
	});
}

export default Component;
