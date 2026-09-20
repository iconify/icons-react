import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu_6_28sp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fu_6_28sp"/>`,
		"fallback": "pajamas:at",
	});
}

export default Component;
