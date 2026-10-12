import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0h02gu-q.css';
import '../../css/z/zfr7hdc4y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0h02gu-q"/><path class="zfr7hdc4y"/>`,
		"fallback": "energy-icons:hurricane-20-bold",
	});
}

export default Component;
