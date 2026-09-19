import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh5mexb5b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eh5mexb5b"/>`,
		"fallback": "catppuccin:api-blueprint",
	});
}

export default Component;
