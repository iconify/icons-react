import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5sibvbex.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q5sibvbex"/>`,
		"fallback": "streamline:flash-off-remix",
	});
}

export default Component;
