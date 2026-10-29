import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwx6u199w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwx6u199w"/>`,
		"fallback": "withicons-bauhaus:bone",
	});
}

export default Component;
