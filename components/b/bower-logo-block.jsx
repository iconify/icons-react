import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrd3bnp0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rrd3bnp0t"/>`,
		"fallback": "streamline-logos:bower-logo-block",
	});
}

export default Component;
