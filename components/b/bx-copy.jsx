import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfnld8b9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfnld8b9e"/>`,
		"fallback": "bx:bx-copy",
	});
}

export default Component;
