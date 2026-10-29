import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onlbud-6m.css';
import '../../css/z/z3dt8qrmb.css';
import '../../css/l/ljw94hbdi.css';
import '../../css/m/mn_fpfo9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onlbud-6m wm-k"/><path class="wm-k z3dt8qrmb"/><path class="ljw94hbdi wm-k"/><path class="mn_fpfo9f wm-a"/>`,
		"fallback": "withicons-bauhaus:chart-bar",
	});
}

export default Component;
