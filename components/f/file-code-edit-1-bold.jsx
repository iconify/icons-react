import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8jy0fbhv.css';
import '../../css/f/f76v0rbmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8jy0fbhv"/><path class="f76v0rbmt"/>`,
		"fallback": "streamline-ultimate:file-code-edit-1-bold",
	});
}

export default Component;
