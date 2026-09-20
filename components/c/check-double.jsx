import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnbsg9ofn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnbsg9ofn"/>`,
		"fallback": "sidekickicons:check-double",
	});
}

export default Component;
