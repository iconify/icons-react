import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud4tzydmp.css';
import '../../css/v/vj4zwzbst.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ud4tzydmp"/><path class="vj4zwzbst"/>`,
		"fallback": "selfhst:bank-of-america",
	});
}

export default Component;
