import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx92tubqs.css';
import '../../css/l/lyyq3vb_a.css';
import '../../css/r/rrev3ybay.css';
import '../../css/t/tgoz9tbvp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vx92tubqs"/><path class="lyyq3vb_a"/><path class="rrev3ybay"/><path class="tgoz9tbvp"/>`,
		"fallback": "energy-icons:atom-20",
	});
}

export default Component;
