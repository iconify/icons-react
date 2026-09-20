import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbc3x4ajk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbc3x4ajk"/>`,
		"fallback": "solar:filter-broken",
	});
}

export default Component;
