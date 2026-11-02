import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myp4mhcjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myp4mhcjb"/>`,
		"fallback": "mingcute:anvil-line",
	});
}

export default Component;
