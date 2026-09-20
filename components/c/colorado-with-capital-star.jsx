import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yimt7bc-m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yimt7bc-m"/>`,
		"fallback": "pinhead:colorado-with-capital-star",
	});
}

export default Component;
