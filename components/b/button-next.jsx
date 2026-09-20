import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/puge_bcna.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="puge_bcna"/>`,
		"fallback": "streamline:button-next",
	});
}

export default Component;
