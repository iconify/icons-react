import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa_132r-y.css';
import '../../css/i/ihmii9b0s.css';
import '../../css/t/tiqwyoept.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa_132r-y"/><path class="ihmii9b0s"/><path class="tiqwyoept"/>`,
		"fallback": "energy-icons:containment-dome-48-bold",
	});
}

export default Component;
