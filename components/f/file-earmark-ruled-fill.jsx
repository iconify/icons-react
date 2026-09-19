import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sa98zrbzw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sa98zrbzw"/>`,
		"fallback": "bi:file-earmark-ruled-fill",
	});
}

export default Component;
