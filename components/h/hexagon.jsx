import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-sriobne.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-sriobne"/>`,
		"fallback": "fa7-solid:hexagon",
	});
}

export default Component;
