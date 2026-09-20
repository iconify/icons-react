import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzmqz21qp.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzmqz21qp"/>`,
		"fallback": "picon:flag",
	});
}

export default Component;
