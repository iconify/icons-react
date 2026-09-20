import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmy8aob1i.css';
import '../../css/k/k743-oxfl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmy8aob1i"/><path clip-rule="evenodd" class="k743-oxfl"/>`,
		"fallback": "ix:battery-quarter",
	});
}

export default Component;
