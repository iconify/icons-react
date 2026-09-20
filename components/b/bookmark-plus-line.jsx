import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgtspcczu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgtspcczu"/>`,
		"fallback": "majesticons:bookmark-plus-line",
	});
}

export default Component;
