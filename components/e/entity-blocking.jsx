import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk7rb9bbz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bk7rb9bbz"/>`,
		"fallback": "pajamas:entity-blocking",
	});
}

export default Component;
