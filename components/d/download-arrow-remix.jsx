import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfl_0pbxy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mfl_0pbxy"/>`,
		"fallback": "streamline-flex:download-arrow-remix",
	});
}

export default Component;
