import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1vsz59_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1vsz59_j"/>`,
		"fallback": "withicons:cat-solid",
	});
}

export default Component;
