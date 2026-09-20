import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5t5jabpv.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5t5jabpv"/>`,
		"fallback": "picon:genie",
	});
}

export default Component;
