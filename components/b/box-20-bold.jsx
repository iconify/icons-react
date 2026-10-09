import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wws_a7ftb.css';
import '../../css/n/nlzn_o26i.css';
import '../../css/u/uu38agbdn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wws_a7ftb"/><path class="nlzn_o26i"/><path class="uu38agbdn"/>`,
		"fallback": "energy-icons:box-20-bold",
	});
}

export default Component;
