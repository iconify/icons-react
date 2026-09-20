import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fl9wfbyji.css';
import '../../css/p/ph-v4yb9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fl9wfbyji"/><path class="ph-v4yb9g"/></g>`,
		"fallback": "streamline-ultimate:fruit-apricot",
	});
}

export default Component;
