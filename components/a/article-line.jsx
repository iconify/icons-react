import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdk53skdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdk53skdb"/>`,
		"fallback": "si:article-line",
	});
}

export default Component;
