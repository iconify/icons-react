import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cd7rfbbuk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cd7rfbbuk"/>`,
		"fallback": "tdesign:calculation-1-filled",
	});
}

export default Component;
