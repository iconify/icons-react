import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm9z_xbka.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bm9z_xbka"/>`,
		"fallback": "codicon:debug-connected-compact",
	});
}

export default Component;
