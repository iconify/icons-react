import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsfyf4bql.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsfyf4bql"/>`,
		"fallback": "f7:goforward-15",
	});
}

export default Component;
