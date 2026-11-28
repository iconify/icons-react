import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wta2nkbvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wta2nkbvk"/>`,
		"fallback": "noviair-light:git-branch-x",
	});
}

export default Component;
