import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iglgn19tg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iglgn19tg"/>`,
		"fallback": "bxs:arrow-from-left",
	});
}

export default Component;
