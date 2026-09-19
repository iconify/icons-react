import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf7p2-bce.css';
import '../../css/i/idjuv0btd.css';
import '../../css/y/y7pnu2bvg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cf7p2-bce"><path class="idjuv0btd"/><path class="y7pnu2bvg"/></g>`,
		"fallback": "catppuccin:audio",
	});
}

export default Component;
