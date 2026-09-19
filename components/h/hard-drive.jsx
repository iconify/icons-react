import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhpnjlb5f.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhpnjlb5f"/>`,
		"fallback": "fa7-solid:hard-drive",
	});
}

export default Component;
