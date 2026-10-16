import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk8ignbif.css';
import '../../css/f/f4xt2vwuy.css';
import '../../css/w/w6jv0yfwh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk8ignbif"/><path class="f4xt2vwuy"/><path class="w6jv0yfwh"/>`,
		"fallback": "energy-icons:dial-indicator-48-bold",
	});
}

export default Component;
