import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj2430bkb.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj2430bkb"/>`,
		"fallback": "dinkie-icons:facebook-small",
	});
}

export default Component;
