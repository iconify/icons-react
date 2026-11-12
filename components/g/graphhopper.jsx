import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bj0ca7rqc.css';
import '../../css/i/ij9mepbyb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="bj0ca7rqc"/><path class="ij9mepbyb"/>`,
		"fallback": "selfhst:graphhopper",
	});
}

export default Component;
