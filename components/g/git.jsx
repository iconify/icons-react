import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2p4y856r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2p4y856r"/>`,
		"fallback": "material-icon-theme:git",
	});
}

export default Component;
