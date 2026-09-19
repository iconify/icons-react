import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8_timb4b.css';
import '../../css/n/nqwt54z4d.css';
import '../../css/c/cqy8vydfp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8_timb4b"/><rect class="nqwt54z4d"/><path class="cqy8vydfp"/>`,
		"fallback": "carbon:cabin-care-alert",
	});
}

export default Component;
