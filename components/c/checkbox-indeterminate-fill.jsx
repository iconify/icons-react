import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zshopx47h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zshopx47h"/>`,
		"fallback": "ri:checkbox-indeterminate-fill",
	});
}

export default Component;
