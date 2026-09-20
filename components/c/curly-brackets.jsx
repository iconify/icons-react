import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5k-nccmu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5k-nccmu"/>`,
		"fallback": "streamline:curly-brackets",
	});
}

export default Component;
