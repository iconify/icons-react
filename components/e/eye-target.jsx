import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia79h9v2o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ia79h9v2o"/>`,
		"fallback": "game-icons:eye-target",
	});
}

export default Component;
