import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xls5c6wzt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xls5c6wzt"/>`,
		"fallback": "gravity-ui:code-commits",
	});
}

export default Component;
