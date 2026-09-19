import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsn6_vzwo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nsn6_vzwo"/>`,
		"fallback": "gravity-ui:arrow-left-from-line",
	});
}

export default Component;
