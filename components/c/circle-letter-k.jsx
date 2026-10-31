import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awoo6h4xx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awoo6h4xx"/>`,
		"fallback": "vadivam:circle-letter-k",
	});
}

export default Component;
