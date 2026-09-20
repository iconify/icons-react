import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5y1ixjbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5y1ixjbt"/>`,
		"fallback": "tdesign:code-1",
	});
}

export default Component;
