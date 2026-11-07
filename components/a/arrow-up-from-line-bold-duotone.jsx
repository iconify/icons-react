import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqha-5bom.css';
import '../../css/j/jsdqiibqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqha-5bom"/><path class="jsdqiibqx"/>`,
		"fallback": "solar:arrow-up-from-line-bold-duotone",
	});
}

export default Component;
