import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkfh--blv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkfh--blv"/>`,
		"fallback": "keyline-icons:git-compare",
	});
}

export default Component;
