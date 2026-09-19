import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g23xqzbpi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g23xqzbpi"/>`,
		"fallback": "bi:earbuds",
	});
}

export default Component;
