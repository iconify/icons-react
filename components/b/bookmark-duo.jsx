import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a25g90ajj.css';
import '../../css/o/oa9edkb7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a25g90ajj secondary"/><path class="oa9edkb7e primary"/>`,
		"fallback": "iconaut:bookmark-duo",
	});
}

export default Component;
