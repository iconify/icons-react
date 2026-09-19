import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ib_exgb_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ib_exgb_b"/>`,
		"fallback": "cbi:ensis-up",
	});
}

export default Component;
