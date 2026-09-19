import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owwit_mkr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owwit_mkr"/>`,
		"fallback": "fa6-solid:diagram-successor",
	});
}

export default Component;
