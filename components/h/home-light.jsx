import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6or-hf8r.css';
import '../../css/u/ux5vwpivn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6or-hf8r"/><path class="ux5vwpivn"/>`,
		"fallback": "stash:home-light",
	});
}

export default Component;
