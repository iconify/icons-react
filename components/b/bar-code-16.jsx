import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okr-h6u1p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okr-h6u1p"/>`,
		"fallback": "qlementine-icons:bar-code-16",
	});
}

export default Component;
