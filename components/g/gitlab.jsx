import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgu29hljj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgu29hljj"/>`,
		"fallback": "catppuccin:gitlab",
	});
}

export default Component;
