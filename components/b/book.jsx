import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_lwrw-gc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c_lwrw-gc"/>`,
		"fallback": "gravity-ui:book",
	});
}

export default Component;
