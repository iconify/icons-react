import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj72zb1uq.css';
import '../../css/t/tp29nr70i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hj72zb1uq"/><path class="tp29nr70i"/>`,
		"fallback": "octicon:feed-tag-16",
	});
}

export default Component;
