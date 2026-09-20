import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo4txbcwo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xo4txbcwo"/>`,
		"fallback": "streamline:database-solid",
	});
}

export default Component;
