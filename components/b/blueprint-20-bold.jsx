import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7flpyn_l.css';
import '../../css/o/ogb69-b7q.css';
import '../../css/q/qcsvf7y1w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7flpyn_l"/><path class="ogb69-b7q"/><path class="qcsvf7y1w"/>`,
		"fallback": "energy-icons:blueprint-20-bold",
	});
}

export default Component;
