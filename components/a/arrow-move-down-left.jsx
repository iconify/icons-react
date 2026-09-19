import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mbvaqc3bs.css';
import '../../css/g/gzkz7w-og.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mbvaqc3bs"/><path class="gzkz7w-og"/></g>`,
		"fallback": "hugeicons:arrow-move-down-left",
	});
}

export default Component;
