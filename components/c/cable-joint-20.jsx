import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_bbmbbxq.css';
import '../../css/b/b9xdq3bwo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_bbmbbxq"/><path class="b9xdq3bwo"/>`,
		"fallback": "energy-icons:cable-joint-20",
	});
}

export default Component;
