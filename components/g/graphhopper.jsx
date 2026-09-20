import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bj0ca7rqc.css';
import '../../css/i/ip_aiub7x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="bj0ca7rqc"/><path class="ip_aiub7x"/>`,
		"fallback": "selfhst:graphhopper",
	});
}

export default Component;
