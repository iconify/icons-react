import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6f-icc4b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6f-icc4b"/>`,
		"fallback": "bi:easel",
	});
}

export default Component;
