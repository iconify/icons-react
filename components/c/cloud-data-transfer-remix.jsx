import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y72vournz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y72vournz"/>`,
		"fallback": "streamline-flex:cloud-data-transfer-remix",
	});
}

export default Component;
