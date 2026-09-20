import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v__un6b8j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v__un6b8j"/>`,
		"fallback": "octicon:checklist-16",
	});
}

export default Component;
