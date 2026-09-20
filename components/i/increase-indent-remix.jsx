import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfng9b3mo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wfng9b3mo"/>`,
		"fallback": "streamline-flex:increase-indent-remix",
	});
}

export default Component;
