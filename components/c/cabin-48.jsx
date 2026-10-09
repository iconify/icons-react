import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgzdi_vdo.css';
import '../../css/w/wfeynzbws.css';
import '../../css/r/rg22j5bgu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgzdi_vdo"/><path class="wfeynzbws"/><path class="rg22j5bgu"/>`,
		"fallback": "energy-icons:cabin-48",
	});
}

export default Component;
