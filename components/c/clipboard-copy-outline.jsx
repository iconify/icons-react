import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxkbezb3a.css';
import '../../css/e/e3rn21oia.css';
import '../../css/c/cz476gtxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxkbezb3a"/><path class="e3rn21oia"/><path class="cz476gtxm"/>`,
		"fallback": "solar:clipboard-copy-outline",
	});
}

export default Component;
