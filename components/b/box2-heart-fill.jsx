import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqwvi89jg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqwvi89jg"/>`,
		"fallback": "bi:box2-heart-fill",
	});
}

export default Component;
