import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qni8_cbhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qni8_cbhu"/>`,
		"fallback": "octicon:dot-fill-24",
	});
}

export default Component;
