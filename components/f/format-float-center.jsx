import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bilus0bbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bilus0bbx"/>`,
		"fallback": "mdi-light:format-float-center",
	});
}

export default Component;
