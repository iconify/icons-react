import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihmii9b0s.css';
import '../../css/t/t-vpait8s.css';
import '../../css/b/bbomh7bop.css';
import '../../css/b/bho8l9bjj.css';
import '../../css/w/wpjkcbchw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihmii9b0s"/><path class="t-vpait8s"/><path class="bbomh7bop"/><path class="bho8l9bjj"/><path class="wpjkcbchw"/>`,
		"fallback": "energy-icons:chart-bar-stacked-48-bold",
	});
}

export default Component;
