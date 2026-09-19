import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2f-umren.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2f-umren"/>`,
		"fallback": "bi:database",
	});
}

export default Component;
