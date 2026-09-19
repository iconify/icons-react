import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1393qb5c.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1393qb5c"/>`,
		"fallback": "dinkie-icons:grass-cao-symbol",
	});
}

export default Component;
