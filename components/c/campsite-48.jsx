import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgrtu-b6i.css';
import '../../css/n/nq7uy796s.css';
import '../../css/g/gfmzq89ku.css';
import '../../css/x/x073nxb-w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgrtu-b6i"/><path class="nq7uy796s"/><path class="gfmzq89ku"/><path class="x073nxb-w"/>`,
		"fallback": "energy-icons:campsite-48",
	});
}

export default Component;
