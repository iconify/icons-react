import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvji5lkkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvji5lkkx"/>`,
		"fallback": "tdesign:check-rectangle-filled",
	});
}

export default Component;
