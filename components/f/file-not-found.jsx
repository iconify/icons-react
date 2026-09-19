import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m60evkbux.css';
import '../../css/c/c95ixjped.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="m60evkbux"/><path class="c95ixjped"/></g>`,
		"fallback": "hugeicons:file-not-found",
	});
}

export default Component;
