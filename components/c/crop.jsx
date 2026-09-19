import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zn6qy6jmf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zn6qy6jmf"/>`,
		"fallback": "bi:crop",
	});
}

export default Component;
