import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqe3nzz0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqe3nzz0g"/>`,
		"fallback": "cbi:aqara-z1-pro-2",
	});
}

export default Component;
