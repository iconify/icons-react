import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e9z1x005p.css';
import '../../css/h/hblm8qgxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e9z1x005p"/><path class="hblm8qgxe"/></g>`,
		"fallback": "reicon:award",
	});
}

export default Component;
