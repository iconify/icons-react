import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6q28_uum.css';
import '../../css/q/q2kzgfbfr.css';
import '../../css/n/nyo26bcbd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6q28_uum"/><path class="q2kzgfbfr"/><path class="nyo26bcbd"/>`,
		"fallback": "selfhst:file-portal-dark",
	});
}

export default Component;
