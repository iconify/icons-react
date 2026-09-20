import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/no74k4_pj.css';
import '../../css/y/y4cd3rkme.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="no74k4_pj"/><path class="y4cd3rkme"/>`,
		"fallback": "selfhst:backuppc-dark",
	});
}

export default Component;
