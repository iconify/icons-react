import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4wd7-nbs.css';
import '../../css/j/jrqzroung.css';
import '../../css/x/xbekolb5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4wd7-nbs"/><path class="jrqzroung"/><path clip-rule="evenodd" class="xbekolb5e"/>`,
		"fallback": "solar:donut-bitten-bold",
	});
}

export default Component;
