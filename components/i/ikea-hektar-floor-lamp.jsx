import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1br8hb5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1br8hb5b"/>`,
		"fallback": "cbi:ikea-hektar-floor-lamp",
	});
}

export default Component;
