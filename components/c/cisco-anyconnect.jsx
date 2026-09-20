import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9wu50bnx.css';
import '../../css/a/a__ik5b7b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9wu50bnx"/><path class="a__ik5b7b"/>`,
		"fallback": "thesvg-color:cisco-anyconnect",
	});
}

export default Component;
