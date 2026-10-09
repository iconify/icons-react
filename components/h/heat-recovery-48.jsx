import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt8wqvb9w.css';
import '../../css/f/ft8kw_b7z.css';
import '../../css/t/tfewnyb2e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt8wqvb9w"/><path class="ft8kw_b7z"/><path class="tfewnyb2e"/>`,
		"fallback": "energy-icons:heat-recovery-48",
	});
}

export default Component;
