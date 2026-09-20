import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf_s62bdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf_s62bdd"/>`,
		"fallback": "mdi:currency-usd-circle-outline",
	});
}

export default Component;
