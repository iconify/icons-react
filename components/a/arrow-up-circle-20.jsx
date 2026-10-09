import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw3xaacjo.css';
import '../../css/v/vr_lhqmel.css';
import '../../css/c/cxs9w9b4b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw3xaacjo"/><path class="vr_lhqmel"/><path class="cxs9w9b4b"/>`,
		"fallback": "energy-icons:arrow-up-circle-20",
	});
}

export default Component;
