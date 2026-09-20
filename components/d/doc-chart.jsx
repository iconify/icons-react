import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6jtt7b2q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r6jtt7b2q"/>`,
		"fallback": "pajamas:doc-chart",
	});
}

export default Component;
