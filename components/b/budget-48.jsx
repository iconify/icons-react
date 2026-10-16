import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca_z99bhx.css';
import '../../css/g/gzw4njbqf.css';
import '../../css/t/t_h9pt-ap.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ca_z99bhx"/><path class="gzw4njbqf"/><path class="t_h9pt-ap"/>`,
		"fallback": "energy-icons:budget-48",
	});
}

export default Component;
