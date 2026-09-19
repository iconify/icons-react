import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1w7a08jx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1w7a08jx"/>`,
		"fallback": "bi:brush-fill",
	});
}

export default Component;
