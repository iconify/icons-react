import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t8a26skit.css';
import '../../css/t/t4t20cc0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t8a26skit"/><path class="t4t20cc0j"/></g>`,
		"fallback": "streamline-ultimate:apk-1",
	});
}

export default Component;
