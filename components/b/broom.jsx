import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7sincczq.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7sincczq"/>`,
		"fallback": "fa-solid:broom",
	});
}

export default Component;
