import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_u_6i4jv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_u_6i4jv"/>`,
		"fallback": "famicons:git-compare",
	});
}

export default Component;
