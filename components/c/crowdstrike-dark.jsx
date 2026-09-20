import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxz09hbkd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxz09hbkd"/>`,
		"fallback": "selfhst:crowdstrike-dark",
	});
}

export default Component;
