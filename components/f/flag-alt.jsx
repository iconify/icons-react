import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ciciw1u9g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ciciw1u9g"/>`,
		"fallback": "cil:flag-alt",
	});
}

export default Component;
