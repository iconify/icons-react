import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xus7n3b_h.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xus7n3b_h"/>`,
		"fallback": "dinkie-icons:face-with-head-bandage",
	});
}

export default Component;
