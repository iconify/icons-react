import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv7mem_ke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv7mem_ke"/>`,
		"fallback": "tdesign:check-circle-filled",
	});
}

export default Component;
