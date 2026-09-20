import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uk1sao3wp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uk1sao3wp"/>`,
		"fallback": "selfhst:fresh-editor-dark",
	});
}

export default Component;
