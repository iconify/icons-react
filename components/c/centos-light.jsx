import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-brn9h0g.css';
import '../../css/q/q7y6lrbrc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-brn9h0g"/><path class="q7y6lrbrc"/>`,
		"fallback": "selfhst:centos-light",
	});
}

export default Component;
