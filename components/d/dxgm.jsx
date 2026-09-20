import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1ct7n8ui.css';
import '../../css/d/dj56zmboa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1ct7n8ui"/><path clip-rule="evenodd" class="dj56zmboa"/>`,
		"fallback": "token:dxgm",
	});
}

export default Component;
