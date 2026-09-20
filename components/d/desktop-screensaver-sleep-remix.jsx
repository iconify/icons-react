import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwpjo8y-g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qwpjo8y-g"/>`,
		"fallback": "streamline-flex:desktop-screensaver-sleep-remix",
	});
}

export default Component;
