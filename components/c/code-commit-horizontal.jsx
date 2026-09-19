import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tubl6gxzg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tubl6gxzg"/>`,
		"fallback": "gravity-ui:code-commit-horizontal",
	});
}

export default Component;
