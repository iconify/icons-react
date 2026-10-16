import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjhy8yb-f.css';
import '../../css/f/f9b4udbcs.css';
import '../../css/o/o0bd2q3dl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjhy8yb-f"/><path class="f9b4udbcs"/><path class="o0bd2q3dl"/>`,
		"fallback": "energy-icons:hydrogen-burner-48-bold",
	});
}

export default Component;
