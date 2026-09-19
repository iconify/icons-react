import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxlfq5tuk.css';
import '../../css/l/leqoybczl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxlfq5tuk"/><path class="leqoybczl"/>`,
		"fallback": "bx:error-circle",
	});
}

export default Component;
