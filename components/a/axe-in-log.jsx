import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sob7tgzjc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sob7tgzjc"/>`,
		"fallback": "game-icons:axe-in-log",
	});
}

export default Component;
