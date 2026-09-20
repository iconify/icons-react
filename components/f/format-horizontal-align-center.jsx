import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6mu9gbof.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6mu9gbof"/>`,
		"fallback": "memory:format-horizontal-align-center",
	});
}

export default Component;
