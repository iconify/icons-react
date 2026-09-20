import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgmfd2b7v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vgmfd2b7v"/>`,
		"fallback": "streamline-flex:fire-alarm-2-remix",
	});
}

export default Component;
