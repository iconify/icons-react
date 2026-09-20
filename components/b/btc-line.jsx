import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udb9-6b9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udb9-6b9f"/>`,
		"fallback": "ri:btc-line",
	});
}

export default Component;
