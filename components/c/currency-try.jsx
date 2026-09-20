import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh95g7bqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh95g7bqk"/>`,
		"fallback": "mdi:currency-try",
	});
}

export default Component;
