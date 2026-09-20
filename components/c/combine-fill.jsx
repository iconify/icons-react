import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy4ndbb0i.css';
import '../../css/u/uszgsoqps.css';
import '../../css/j/jmec2jscz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy4ndbb0i"/><path class="uszgsoqps"/><path class="jmec2jscz"/>`,
		"fallback": "mingcute:combine-fill",
	});
}

export default Component;
