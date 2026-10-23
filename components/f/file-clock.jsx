import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp9ys83uq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yp9ys83uq"/>`,
		"fallback": "vadivam:file-clock",
	});
}

export default Component;
