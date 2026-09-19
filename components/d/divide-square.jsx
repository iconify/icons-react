import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eie8mt2ml.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eie8mt2ml"/>`,
		"fallback": "f7:divide-square",
	});
}

export default Component;
