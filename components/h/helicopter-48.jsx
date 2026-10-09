import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp7-jacac.css';
import '../../css/r/rmei1lbaz.css';
import '../../css/t/txgfsobga.css';
import '../../css/v/vqtn4ybkd.css';
import '../../css/a/a97kokbba.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp7-jacac"/><path class="rmei1lbaz"/><path class="txgfsobga"/><path class="vqtn4ybkd"/><path class="a97kokbba"/>`,
		"fallback": "energy-icons:helicopter-48",
	});
}

export default Component;
