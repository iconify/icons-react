import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqww0i2he.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqww0i2he"/>`,
		"fallback": "noviair-light:git-merge-x",
	});
}

export default Component;
