import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3upbbr5e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3upbbr5e"/>`,
		"fallback": "streamline-flex:incorrect-password",
	});
}

export default Component;
