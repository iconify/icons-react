import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw_tfybwx.css';
import '../../css/w/w5lorqb0k.css';
import '../../css/k/kc_4boqkx.css';
import '../../css/y/ygtv74bcc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw_tfybwx"/><path class="w5lorqb0k"/><path class="kc_4boqkx"/><path class="ygtv74bcc"/>`,
		"fallback": "energy-icons:house-battery-alert-48-bold",
	});
}

export default Component;
