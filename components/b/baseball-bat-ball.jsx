import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kdycmgbfe.css';
import '../../css/m/mvpppob3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kdycmgbfe"/><path class="mvpppob3i"/></g>`,
		"fallback": "streamline-ultimate:baseball-bat-ball",
	});
}

export default Component;
