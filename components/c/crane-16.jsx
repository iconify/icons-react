import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hy6bdibix.css';
import '../../css/g/gvxfo6vqt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hy6bdibix"/><path clip-rule="evenodd" class="gvxfo6vqt"/>`,
		"fallback": "qlementine-icons:crane-16",
	});
}

export default Component;
