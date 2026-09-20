import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w03w44bva.css';
import '../../css/h/hq0wtlbpd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w03w44bva"/><path class="hq0wtlbpd"/>`,
		"fallback": "roentgen:bicycle-wrench",
	});
}

export default Component;
