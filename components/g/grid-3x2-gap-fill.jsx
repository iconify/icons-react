import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvnuofn2w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvnuofn2w"/>`,
		"fallback": "bi:grid-3x2-gap-fill",
	});
}

export default Component;
