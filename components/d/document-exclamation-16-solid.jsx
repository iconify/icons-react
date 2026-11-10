import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0ko-764v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h0ko-764v"/>`,
		"fallback": "sidekickicons:document-exclamation-16-solid",
	});
}

export default Component;
