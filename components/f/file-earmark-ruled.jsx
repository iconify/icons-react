import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2cpz77ps.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2cpz77ps"/>`,
		"fallback": "bi:file-earmark-ruled",
	});
}

export default Component;
