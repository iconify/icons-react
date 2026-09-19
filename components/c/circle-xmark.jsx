import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-j7gmgzj.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-j7gmgzj"/>`,
		"fallback": "fa7-solid:circle-xmark",
	});
}

export default Component;
