import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mf56bo8kc.css';
import '../../css/m/m1cjllb3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="mf56bo8kc"/><path class="m1cjllb3t"/></g>`,
		"fallback": "streamline-sharp:database",
	});
}

export default Component;
