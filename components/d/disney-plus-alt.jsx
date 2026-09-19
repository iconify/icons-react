import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t15ldcb7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t15ldcb7m"/>`,
		"fallback": "cbi:disney-plus-alt",
	});
}

export default Component;
