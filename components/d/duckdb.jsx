import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jic3_cbyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jic3_cbyy"/>`,
		"fallback": "thesvg-color:duckdb",
	});
}

export default Component;
