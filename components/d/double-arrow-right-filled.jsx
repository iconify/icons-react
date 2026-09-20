import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ws20coc9l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ws20coc9l"/>`,
		"fallback": "lsicon:double-arrow-right-filled",
	});
}

export default Component;
