import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9ftu10bs.css';

const viewBox = {"width":1664,"height":1568};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9ftu10bs"/>`,
		"fallback": "fa:dropbox",
	});
}

export default Component;
