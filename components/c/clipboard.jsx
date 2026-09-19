import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtv-ejb0q.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtv-ejb0q"/>`,
		"fallback": "fa-solid:clipboard",
	});
}

export default Component;
