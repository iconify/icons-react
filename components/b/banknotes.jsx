import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wc7y2bxnl.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wc7y2bxnl"/>`,
		"fallback": "wpf:banknotes",
	});
}

export default Component;
