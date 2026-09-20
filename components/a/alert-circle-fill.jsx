import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awleaubuh.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awleaubuh"/>`,
		"fallback": "memory:alert-circle-fill",
	});
}

export default Component;
