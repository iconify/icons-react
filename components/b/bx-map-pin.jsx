import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgxkgcndv.css';
import '../../css/e/e5703z3pa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgxkgcndv"/><path class="e5703z3pa"/>`,
		"fallback": "bx:bx-map-pin",
	});
}

export default Component;
