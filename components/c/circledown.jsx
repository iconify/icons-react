import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6u4jdb_s.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6u4jdb_s"/>`,
		"fallback": "whh:circledown",
	});
}

export default Component;
