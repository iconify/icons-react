import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpju4jbvx.css';
import '../../css/t/tqpmf_bni.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpju4jbvx"/><path class="tqpmf_bni"/>`,
		"fallback": "selfhst:hawser-light",
	});
}

export default Component;
