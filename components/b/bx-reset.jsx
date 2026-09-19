import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r84hslb4j.css';
import '../../css/w/wjj22sddn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r84hslb4j"/><path class="wjj22sddn"/>`,
		"fallback": "bx:bx-reset",
	});
}

export default Component;
