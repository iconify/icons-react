import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9zih83im.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o9zih83im"/>`,
		"fallback": "streamline-flex:archive-box-remix",
	});
}

export default Component;
