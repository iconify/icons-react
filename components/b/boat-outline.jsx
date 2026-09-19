import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay3i2kbgt.css';
import '../../css/h/hgch7obpd.css';
import '../../css/h/hs4od_bjy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay3i2kbgt"/><path class="hgch7obpd"/><path class="hs4od_bjy"/>`,
		"fallback": "ion:boat-outline",
	});
}

export default Component;
