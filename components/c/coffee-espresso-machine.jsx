import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/eh74_08tw.css';
import '../../css/j/jy8px0r7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="eh74_08tw"/><path class="jy8px0r7l"/></g>`,
		"fallback": "streamline-ultimate:coffee-espresso-machine",
	});
}

export default Component;
