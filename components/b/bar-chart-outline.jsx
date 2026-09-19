import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou5lp3-8i.css';
import '../../css/f/fcfjhdcnf.css';
import '../../css/e/e7n2iruil.css';
import '../../css/q/qaayn7bcp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ou5lp3-8i"/><rect class="fcfjhdcnf"/><rect class="e7n2iruil"/><rect class="qaayn7bcp"/>`,
		"fallback": "famicons:bar-chart-outline",
	});
}

export default Component;
