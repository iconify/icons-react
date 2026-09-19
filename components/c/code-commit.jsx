import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db_g-1b0i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="db_g-1b0i"/>`,
		"fallback": "gravity-ui:code-commit",
	});
}

export default Component;
