import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp-f0m6jk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp-f0m6jk"/>`,
		"fallback": "ix:code-script",
	});
}

export default Component;
