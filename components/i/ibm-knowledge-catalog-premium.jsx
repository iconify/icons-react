import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mitnc4beu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mitnc4beu"/>`,
		"fallback": "carbon:ibm-knowledge-catalog-premium",
	});
}

export default Component;
