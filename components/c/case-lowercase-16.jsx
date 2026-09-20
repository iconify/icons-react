import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqcyy616u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dqcyy616u"/>`,
		"fallback": "qlementine-icons:case-lowercase-16",
	});
}

export default Component;
