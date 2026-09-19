import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/keu3it29w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="keu3it29w"/>`,
		"fallback": "cbi:ceiling-being",
	});
}

export default Component;
