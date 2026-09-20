import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h40kk1bvm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h40kk1bvm"/>`,
		"fallback": "nonicons:babel-16",
	});
}

export default Component;
