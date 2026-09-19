import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x87c4mu7q.css';

const viewBox = {"width":1664,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x87c4mu7q"/>`,
		"fallback": "fa:folder",
	});
}

export default Component;
