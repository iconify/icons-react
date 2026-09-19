import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zal_jib7j.css';
import '../../css/w/wrtw-pbai.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zal_jib7j"/><path class="wrtw-pbai"/></g>`,
		"fallback": "healthicons:bio-pharma2x-outline",
	});
}

export default Component;
