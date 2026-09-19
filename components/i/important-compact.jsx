import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhj_eqnyu.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhj_eqnyu"/>`,
		"fallback": "codicon:important-compact",
	});
}

export default Component;
