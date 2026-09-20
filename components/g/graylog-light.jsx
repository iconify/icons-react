import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnjxs1h6l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnjxs1h6l"/>`,
		"fallback": "selfhst:graylog-light",
	});
}

export default Component;
