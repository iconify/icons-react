import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh7ee76kx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh7ee76kx"/>`,
		"fallback": "icomoon-free:firefox",
	});
}

export default Component;
