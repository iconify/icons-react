import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp8-qrb2q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gp8-qrb2q"/>`,
		"fallback": "qlementine-icons:go-bottom-16",
	});
}

export default Component;
