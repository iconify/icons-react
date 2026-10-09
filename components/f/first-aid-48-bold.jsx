import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogq5qbbkl.css';
import '../../css/z/ztf_3vb_o.css';
import '../../css/w/whmh-fbae.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogq5qbbkl"/><path class="ztf_3vb_o"/><path class="whmh-fbae"/>`,
		"fallback": "energy-icons:first-aid-48-bold",
	});
}

export default Component;
