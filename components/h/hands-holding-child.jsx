import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b23j45yys.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b23j45yys"/>`,
		"fallback": "fa6-solid:hands-holding-child",
	});
}

export default Component;
