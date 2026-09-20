import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb1bdbcsu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb1bdbcsu"/>`,
		"fallback": "la:google-drive",
	});
}

export default Component;
