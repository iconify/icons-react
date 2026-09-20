import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eoy4dks5r.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eoy4dks5r"/>`,
		"fallback": "picon:guitar",
	});
}

export default Component;
