import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp7javlbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lp7javlbk"/>`,
		"fallback": "reicon:doc-text",
	});
}

export default Component;
