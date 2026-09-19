import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgc3nvkvn.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgc3nvkvn"/>`,
		"fallback": "fa7-solid:bridge",
	});
}

export default Component;
