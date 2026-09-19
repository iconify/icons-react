import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zevvw2r7w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zevvw2r7w"/>`,
		"fallback": "bi:2-square-fill",
	});
}

export default Component;
