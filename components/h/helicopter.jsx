import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hshqtwb3q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hshqtwb3q"/>`,
		"fallback": "pinhead:helicopter",
	});
}

export default Component;
