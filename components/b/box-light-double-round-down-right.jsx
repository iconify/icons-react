import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx9uqkqgr.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tx9uqkqgr"/>`,
		"fallback": "memory:box-light-double-round-down-right",
	});
}

export default Component;
