import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oako69bqb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oako69bqb"/>`,
		"fallback": "energy-icons:anvil-20",
	});
}

export default Component;
