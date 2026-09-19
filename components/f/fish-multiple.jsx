import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyvdncc_g.css';
import '../../css/r/rn2kcz5al.css';
import '../../css/g/gnbroibpd.css';
import '../../css/g/g51crmbnr.css';
import '../../css/c/cb92fbcyb.css';
import '../../css/s/su8ov74lc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyvdncc_g"/><circle class="rn2kcz5al"/><path class="gnbroibpd"/><circle class="g51crmbnr"/><circle class="cb92fbcyb"/><path class="su8ov74lc"/>`,
		"fallback": "carbon:fish-multiple",
	});
}

export default Component;
