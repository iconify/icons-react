import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea0phfbzz.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea0phfbzz"/>`,
		"fallback": "picon:cheese",
	});
}

export default Component;
