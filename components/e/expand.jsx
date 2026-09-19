import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zf9136b-u.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zf9136b-u"/>`,
		"fallback": "ep:expand",
	});
}

export default Component;
