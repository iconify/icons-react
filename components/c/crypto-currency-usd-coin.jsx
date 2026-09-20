import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbj9ytcaq.css';
import '../../css/q/qs3nn1ykv.css';
import '../../css/o/o3v08d-1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbj9ytcaq"/><path class="qs3nn1ykv"/><path class="o3v08d-1q"/>`,
		"fallback": "streamline-freehand:crypto-currency-usd-coin",
	});
}

export default Component;
