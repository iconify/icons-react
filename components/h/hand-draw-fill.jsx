import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di-eyczor.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="di-eyczor"/>`,
		"fallback": "f7:hand-draw-fill",
	});
}

export default Component;
