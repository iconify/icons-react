import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5w8rdb-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5w8rdb-f"/>`,
		"fallback": "simple-icons:convertio",
	});
}

export default Component;
