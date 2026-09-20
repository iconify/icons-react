import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy5fcmbjd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy5fcmbjd"/>`,
		"fallback": "pinhead:broadleaved-tree-in-water",
	});
}

export default Component;
