import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfe5p0b6v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfe5p0b6v"/>`,
		"fallback": "carbon:currency-pound",
	});
}

export default Component;
