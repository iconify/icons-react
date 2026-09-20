import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwqo_9cnu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwqo_9cnu"/>`,
		"fallback": "streamline:christian-cross-2",
	});
}

export default Component;
