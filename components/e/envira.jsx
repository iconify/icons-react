import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4wsr5byq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4wsr5byq"/>`,
		"fallback": "la:envira",
	});
}

export default Component;
