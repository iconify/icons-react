import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqc3pmu_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wqc3pmu_m"/>`,
		"fallback": "reicon:caret-right-square-filled",
	});
}

export default Component;
