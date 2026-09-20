import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_fl7315g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k_fl7315g"/>`,
		"fallback": "streamline:bluetooth-disabled-remix",
	});
}

export default Component;
