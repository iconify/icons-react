import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc__sdytk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc__sdytk"/>`,
		"fallback": "bi:image-alt",
	});
}

export default Component;
