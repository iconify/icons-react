import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udf-wzd9w.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udf-wzd9w"/>`,
		"fallback": "f7:arrow-up-circle",
	});
}

export default Component;
