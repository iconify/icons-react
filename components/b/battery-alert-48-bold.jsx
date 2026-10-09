import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd4yffbrl.css';
import '../../css/g/gex21tb2f.css';
import '../../css/u/u9s9akrzi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd4yffbrl"/><path class="gex21tb2f"/><path class="u9s9akrzi"/>`,
		"fallback": "energy-icons:battery-alert-48-bold",
	});
}

export default Component;
