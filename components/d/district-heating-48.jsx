import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4lrodbjn.css';
import '../../css/s/s3ntjw07u.css';
import '../../css/p/pkgh68sab.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4lrodbjn"/><path class="s3ntjw07u"/><path class="pkgh68sab"/>`,
		"fallback": "energy-icons:district-heating-48",
	});
}

export default Component;
