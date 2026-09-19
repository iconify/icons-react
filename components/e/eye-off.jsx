import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7slzmblf.css';
import '../../css/y/ywurx5bka.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7slzmblf"/><path class="ywurx5bka"/>`,
		"fallback": "famicons:eye-off",
	});
}

export default Component;
