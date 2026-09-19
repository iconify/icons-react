import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ew3sobj_x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ew3sobj_x"/>`,
		"fallback": "game-icons:cardboard-box",
	});
}

export default Component;
