import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbr_9nbyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbr_9nbyg"/>`,
		"fallback": "cbi:criterion-channel",
	});
}

export default Component;
