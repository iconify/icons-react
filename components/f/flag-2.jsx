import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oa_qoyf3k.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oa_qoyf3k"/>`,
		"fallback": "lineicons:flag-2",
	});
}

export default Component;
