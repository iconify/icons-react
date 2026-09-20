import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n89iqcb9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n89iqcb9g"/>`,
		"fallback": "mdi:city-variant",
	});
}

export default Component;
