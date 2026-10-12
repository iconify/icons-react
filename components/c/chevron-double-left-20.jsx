import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypvhh7b9x.css';
import '../../css/w/w2aqxxbkb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypvhh7b9x"/><path class="w2aqxxbkb"/>`,
		"fallback": "garden:chevron-double-left-20",
	});
}

export default Component;
