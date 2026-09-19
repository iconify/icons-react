import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g40yv2bvn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g40yv2bvn"/>`,
		"fallback": "heroicons-solid:arrow-sm-up",
	});
}

export default Component;
