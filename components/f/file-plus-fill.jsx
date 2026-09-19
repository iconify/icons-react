import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lekjeecxz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lekjeecxz"/>`,
		"fallback": "bi:file-plus-fill",
	});
}

export default Component;
