import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1ohtunpb.css';
import '../../css/u/uxtfceu2g.css';
import '../../css/q/qcfr4vtpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1ohtunpb"/><rect class="uxtfceu2g"/><path class="qcfr4vtpo"/>`,
		"fallback": "boxicons:bar-chart-big-filled",
	});
}

export default Component;
