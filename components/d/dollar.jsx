import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4psys0ov.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4psys0ov"/>`,
		"fallback": "pinhead:dollar",
	});
}

export default Component;
