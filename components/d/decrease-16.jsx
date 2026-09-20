import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azvkn8bxq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azvkn8bxq"/>`,
		"fallback": "qlementine-icons:decrease-16",
	});
}

export default Component;
