import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx2-j8bpe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jx2-j8bpe"/>`,
		"fallback": "icomoon-free:bold",
	});
}

export default Component;
