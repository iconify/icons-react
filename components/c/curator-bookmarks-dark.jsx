import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjdk-tbmr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjdk-tbmr"/>`,
		"fallback": "selfhst:curator-bookmarks-dark",
	});
}

export default Component;
