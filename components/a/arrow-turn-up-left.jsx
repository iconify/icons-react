import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybb-y_bpb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybb-y_bpb"/>`,
		"fallback": "at-icons:arrow-turn-up-left",
	});
}

export default Component;
