import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oya9pf1oj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oya9pf1oj"/>`,
		"fallback": "game-icons:grasping-slug",
	});
}

export default Component;
