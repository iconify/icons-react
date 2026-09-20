import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4v9t8bqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4v9t8bqk"/>`,
		"fallback": "material-icon-theme:firebase",
	});
}

export default Component;
