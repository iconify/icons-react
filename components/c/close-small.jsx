import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h63z7hbbk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h63z7hbbk"/>`,
		"fallback": "codicon:close-small",
	});
}

export default Component;
