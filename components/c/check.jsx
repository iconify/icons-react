import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aeeq3hpby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aeeq3hpby"/>`,
		"fallback": "gg:check",
	});
}

export default Component;
