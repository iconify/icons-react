import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k3l50k9jw.css';
import '../../css/h/h6_wij6jb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k3l50k9jw"/><path class="h6_wij6jb"/></g>`,
		"fallback": "hugeicons:hackerrank",
	});
}

export default Component;
