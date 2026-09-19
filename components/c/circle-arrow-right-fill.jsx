import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsfyh9guo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bsfyh9guo"/>`,
		"fallback": "gravity-ui:circle-arrow-right-fill",
	});
}

export default Component;
