import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzu_qpbzv.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzu_qpbzv"/>`,
		"fallback": "fa7-solid:circle-h",
	});
}

export default Component;
