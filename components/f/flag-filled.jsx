import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar98n3b9f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ar98n3b9f"/>`,
		"fallback": "lsicon:flag-filled",
	});
}

export default Component;
