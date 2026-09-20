import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8ieatj3o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a8ieatj3o"/>`,
		"fallback": "streamline:ai-network-spark-remix",
	});
}

export default Component;
