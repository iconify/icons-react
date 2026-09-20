import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9uzlgk-n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r9uzlgk-n"/>`,
		"fallback": "streamline:browser-lock-remix",
	});
}

export default Component;
