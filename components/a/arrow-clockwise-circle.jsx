import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bq4f1ncey.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bq4f1ncey"/>`,
		"fallback": "f7:arrow-clockwise-circle",
	});
}

export default Component;
