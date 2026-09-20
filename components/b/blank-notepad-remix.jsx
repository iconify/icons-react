import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awc5oyblx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="awc5oyblx"/>`,
		"fallback": "streamline:blank-notepad-remix",
	});
}

export default Component;
