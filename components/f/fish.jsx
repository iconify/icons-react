import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9h4j1-rk.css';

const viewBox = {"width":512,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9h4j1-rk"/>`,
		"fallback": "ps:fish",
	});
}

export default Component;
