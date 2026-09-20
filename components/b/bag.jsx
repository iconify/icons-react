import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz4xy4xop.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tz4xy4xop"/>`,
		"fallback": "pinhead:bag",
	});
}

export default Component;
