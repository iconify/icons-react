import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9h4qu6lx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u9h4qu6lx"/>`,
		"fallback": "gravity-ui:circle-letter-f",
	});
}

export default Component;
