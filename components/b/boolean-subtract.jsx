import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tne-w562i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tne-w562i"/>`,
		"fallback": "at-icons:boolean-subtract",
	});
}

export default Component;
