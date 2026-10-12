import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rogv-gcwu.css';
import '../../css/d/dq-bitbup.css';
import '../../css/y/ygtv74bcc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rogv-gcwu"/><path class="dq-bitbup"/><path class="ygtv74bcc"/>`,
		"fallback": "energy-icons:boiler-alert-48-bold",
	});
}

export default Component;
