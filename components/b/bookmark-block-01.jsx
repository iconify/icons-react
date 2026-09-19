import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/ogtr9eflh.css';
import '../../css/o/o45e73ara.css';
import '../../css/c/cvx-s1b9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ogtr9eflh"/><path class="o45e73ara"/><path class="cvx-s1b9u"/></g>`,
		"fallback": "hugeicons:bookmark-block-01",
	});
}

export default Component;
