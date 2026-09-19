import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/po-vxz7kr.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="po-vxz7kr"/>`,
		"fallback": "fluent-mdl2:browser-tab-screenshot",
	});
}

export default Component;
