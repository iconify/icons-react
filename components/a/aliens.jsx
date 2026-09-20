import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4neugbts.css';

const viewBox = {"width":1102,"height":1462};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4neugbts"/>`,
		"fallback": "wi:aliens",
	});
}

export default Component;
