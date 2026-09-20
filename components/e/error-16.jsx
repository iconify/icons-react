import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7y1xq4zj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7y1xq4zj"/>`,
		"fallback": "nonicons:error-16",
	});
}

export default Component;
