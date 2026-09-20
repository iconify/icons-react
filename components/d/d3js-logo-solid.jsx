import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r36w5t33e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r36w5t33e"/>`,
		"fallback": "streamline-logos:d3js-logo-solid",
	});
}

export default Component;
