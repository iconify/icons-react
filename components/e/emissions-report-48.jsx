import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca_z99bhx.css';
import '../../css/d/d4jpy3b6p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ca_z99bhx"/><path class="d4jpy3b6p"/>`,
		"fallback": "energy-icons:emissions-report-48",
	});
}

export default Component;
