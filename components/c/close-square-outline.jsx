import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rc5t7t3ch.css';
import '../../css/g/g4e643m4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rc5t7t3ch"/><path clip-rule="evenodd" class="g4e643m4g"/>`,
		"fallback": "solar:close-square-outline",
	});
}

export default Component;
