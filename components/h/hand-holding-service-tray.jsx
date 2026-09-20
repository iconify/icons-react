import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c97p5ln2q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c97p5ln2q"/>`,
		"fallback": "pinhead:hand-holding-service-tray",
	});
}

export default Component;
