import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d68b07bvk.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d68b07bvk"/>`,
		"fallback": "fluent-mdl2:chevron-down-med",
	});
}

export default Component;
