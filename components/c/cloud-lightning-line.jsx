import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwux80bdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xwux80bdd"/>`,
		"fallback": "mingcute:cloud-lightning-line",
	});
}

export default Component;
