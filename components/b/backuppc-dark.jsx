import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt75vhbsg.css';
import '../../css/y/y4cd3rkme.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt75vhbsg"/><path class="y4cd3rkme"/>`,
		"fallback": "selfhst:backuppc-dark",
	});
}

export default Component;
