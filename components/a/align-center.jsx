import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz3gffb2n.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz3gffb2n"/>`,
		"fallback": "fa-solid:align-center",
	});
}

export default Component;
