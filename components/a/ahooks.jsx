import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u2398wb7u.css';
import '../../css/s/s76kbrb9m.css';

const viewBox = {"width":44,"height":44};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="u2398wb7u"/><path class="s76kbrb9m"/></g>`,
		"fallback": "thesvg-color:ahooks",
	});
}

export default Component;
