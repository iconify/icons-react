import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f53r9-bns.css';
import '../../css/h/hutz5yftv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f53r9-bns"/><path class="hutz5yftv"/>`,
		"fallback": "selfhst:fedex",
	});
}

export default Component;
