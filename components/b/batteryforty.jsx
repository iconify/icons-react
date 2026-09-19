import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqlh6hb3q.css';

const viewBox = {"width":1024,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqlh6hb3q"/>`,
		"fallback": "whh:batteryforty",
	});
}

export default Component;
