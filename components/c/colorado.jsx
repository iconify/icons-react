import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-0ytcb0q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-0ytcb0q"/>`,
		"fallback": "pinhead:colorado",
	});
}

export default Component;
