import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qguk79b1a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qguk79b1a"/>`,
		"fallback": "streamline-flex:horizontal-toggle-button-remix",
	});
}

export default Component;
