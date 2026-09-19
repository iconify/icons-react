import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2qtvtw0k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2qtvtw0k"/>`,
		"fallback": "icomoon-free:cloud-upload",
	});
}

export default Component;
