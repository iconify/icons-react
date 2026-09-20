import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_h9vnu3r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_h9vnu3r"/>`,
		"fallback": "subway:cercle-4",
	});
}

export default Component;
