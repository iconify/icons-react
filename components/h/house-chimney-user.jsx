import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsiw1rkpm.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsiw1rkpm"/>`,
		"fallback": "fa7-solid:house-chimney-user",
	});
}

export default Component;
