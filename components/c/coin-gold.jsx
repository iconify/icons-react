import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nof6d3bsw.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nof6d3bsw"/>`,
		"fallback": "memory:coin-gold",
	});
}

export default Component;
