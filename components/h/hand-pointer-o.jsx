import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgo980z3u.css';

const viewBox = {"width":1664,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgo980z3u"/>`,
		"fallback": "fa:hand-pointer-o",
	});
}

export default Component;
