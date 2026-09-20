import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ew1ze1bsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ew1ze1bsl"/>`,
		"fallback": "token:cream",
	});
}

export default Component;
