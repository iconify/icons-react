import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt_ce3hdt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rt_ce3hdt"/>`,
		"fallback": "streamline:hotel-shower-head-remix",
	});
}

export default Component;
