import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yu5immt_f.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yu5immt_f"/>`,
		"fallback": "zmdi:alarm-check",
	});
}

export default Component;
