import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia73cybmz.css';
import '../../css/c/ccy637b1a.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ia73cybmz"/><path class="ccy637b1a"/>`,
		"fallback": "ep:credit-card",
	});
}

export default Component;
