import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbg92d_-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbg92d_-t"/>`,
		"fallback": "noviair:cloud-lock",
	});
}

export default Component;
