import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c84wutbkp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c84wutbkp"/>`,
		"fallback": "gravity-ui:code-pull-request-arrow-right",
	});
}

export default Component;
