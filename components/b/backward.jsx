import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-6xlxb5c.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-6xlxb5c"/>`,
		"fallback": "fontisto:backward",
	});
}

export default Component;
