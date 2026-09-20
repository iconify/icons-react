import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgjm7j-sy.css';
import '../../css/v/vi5e0ubjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgjm7j-sy"/><path class="vi5e0ubjo"/>`,
		"fallback": "tdesign:building-2-filled",
	});
}

export default Component;
