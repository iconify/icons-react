import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc-9sqbjj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc-9sqbjj"/>`,
		"fallback": "game-icons:architect-mask",
	});
}

export default Component;
