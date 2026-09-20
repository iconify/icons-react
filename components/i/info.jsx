import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtpka_b6k.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtpka_b6k"/>`,
		"fallback": "picon:info",
	});
}

export default Component;
