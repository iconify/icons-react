import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqr0zm-hq.css';
import '../../css/n/n2x5xwbjj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqr0zm-hq"/><path class="n2x5xwbjj"/>`,
		"fallback": "selfhst:dosvault-light",
	});
}

export default Component;
