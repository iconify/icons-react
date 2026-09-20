import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9on-9b5o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d9on-9b5o"/>`,
		"fallback": "pajamas:cherry-pick-commit",
	});
}

export default Component;
