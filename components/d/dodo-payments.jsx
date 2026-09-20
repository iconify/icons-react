import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbeh8kbjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbeh8kbjn"/>`,
		"fallback": "thesvg:dodo-payments",
	});
}

export default Component;
