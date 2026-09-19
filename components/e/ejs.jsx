import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo4xqf7hv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zo4xqf7hv"/>`,
		"fallback": "catppuccin:ejs",
	});
}

export default Component;
