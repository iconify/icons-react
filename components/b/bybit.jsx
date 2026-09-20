import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ius9uybvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ius9uybvm"/>`,
		"fallback": "token:bybit",
	});
}

export default Component;
