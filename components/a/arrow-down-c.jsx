import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfp95qq4j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfp95qq4j"/>`,
		"fallback": "ion:arrow-down-c",
	});
}

export default Component;
