import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2cn_abmu.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2cn_abmu"/>`,
		"fallback": "picon:gitlab",
	});
}

export default Component;
