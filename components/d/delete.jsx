import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpfgoza3b.css';

const viewBox = {"width":304,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpfgoza3b"/>`,
		"fallback": "zmdi:delete",
	});
}

export default Component;
