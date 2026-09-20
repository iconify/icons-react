import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0f9qrb5l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g0f9qrb5l"/>`,
		"fallback": "streamline-flex:code-monitor-1-remix",
	});
}

export default Component;
