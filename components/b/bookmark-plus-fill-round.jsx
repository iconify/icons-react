import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ueyl-bcza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ueyl-bcza"/>`,
		"fallback": "coolicons:bookmark-plus-fill-round",
	});
}

export default Component;
