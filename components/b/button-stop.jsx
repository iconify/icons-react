import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/ql7ror-gd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ql7ror-gd"/>`,
		"fallback": "streamline:button-stop",
	});
}

export default Component;
