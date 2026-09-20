import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9m2ddbuh.css';
import '../../css/p/pfsh8mdfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9m2ddbuh"/><path class="pfsh8mdfx"/>`,
		"fallback": "token:alpha-wallet",
	});
}

export default Component;
