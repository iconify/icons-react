import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0o3itbqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0o3itbqy"/>`,
		"fallback": "noviair:banknote-check",
	});
}

export default Component;
