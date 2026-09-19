import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kk1b1pbeh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kk1b1pbeh"/>`,
		"fallback": "gravity-ui:cloud-check",
	});
}

export default Component;
