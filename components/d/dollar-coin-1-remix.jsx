import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbe5hy7tb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xbe5hy7tb"/>`,
		"fallback": "streamline:dollar-coin-1-remix",
	});
}

export default Component;
