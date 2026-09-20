import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/y/yjiaj-hac.css';
import '../../css/o/ojlyxpbzd.css';
import '../../css/h/h871gdf8b.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path class="yjiaj-hac"/><path class="ojlyxpbzd"/><path class="h871gdf8b"/></g>`,
		"fallback": "skill-icons:haskell-light",
	});
}

export default Component;
