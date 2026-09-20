import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w42rvhb6a.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w42rvhb6a"/>`,
		"fallback": "simple-line-icons:grid",
	});
}

export default Component;
