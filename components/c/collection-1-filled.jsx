import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxd08ei8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxd08ei8z"/>`,
		"fallback": "tdesign:collection-1-filled",
	});
}

export default Component;
