import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uixa-ip4m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uixa-ip4m"/>`,
		"fallback": "streamline:hearing-deaf-1-remix",
	});
}

export default Component;
