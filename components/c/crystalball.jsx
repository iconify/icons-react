import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbivirb6u.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbivirb6u"/>`,
		"fallback": "picon:crystalball",
	});
}

export default Component;
