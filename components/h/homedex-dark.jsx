import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0aj4mq7p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0aj4mq7p"/>`,
		"fallback": "selfhst:homedex-dark",
	});
}

export default Component;
