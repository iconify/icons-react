import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm9c_ib7q.css';

const viewBox = {"width":401,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm9c_ib7q"/>`,
		"fallback": "file-icons:bintray",
	});
}

export default Component;
