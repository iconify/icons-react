import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qczze5bto.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qczze5bto"/>`,
		"fallback": "lineicons:highlighter-2",
	});
}

export default Component;
