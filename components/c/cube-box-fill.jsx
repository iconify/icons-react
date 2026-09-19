import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3w0cnbgc.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3w0cnbgc"/>`,
		"fallback": "f7:cube-box-fill",
	});
}

export default Component;
