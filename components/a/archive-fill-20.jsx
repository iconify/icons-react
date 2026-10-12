import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zf7tsiqra.css';
import '../../css/e/eugsobcjx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zf7tsiqra"/><path class="eugsobcjx"/>`,
		"fallback": "garden:archive-fill-20",
	});
}

export default Component;
