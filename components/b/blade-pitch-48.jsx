import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjiicgwoi.css';
import '../../css/i/iqro0lbqy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjiicgwoi"/><path class="iqro0lbqy"/>`,
		"fallback": "energy-icons:blade-pitch-48",
	});
}

export default Component;
