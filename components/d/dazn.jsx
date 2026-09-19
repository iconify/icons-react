import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnc2a2bwe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnc2a2bwe"/>`,
		"fallback": "cib:dazn",
	});
}

export default Component;
