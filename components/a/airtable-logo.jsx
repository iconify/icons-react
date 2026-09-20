import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w53pd_q7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w53pd_q7d"/>`,
		"fallback": "streamline-ultimate:airtable-logo",
	});
}

export default Component;
