import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjg4y1s3f.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjg4y1s3f"/>`,
		"fallback": "pullo:clipboard-check-fill",
	});
}

export default Component;
