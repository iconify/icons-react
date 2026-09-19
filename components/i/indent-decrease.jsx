import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_ilgq-0y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_ilgq-0y"/>`,
		"fallback": "icomoon-free:indent-decrease",
	});
}

export default Component;
