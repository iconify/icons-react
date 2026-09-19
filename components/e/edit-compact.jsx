import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4pbix25t.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h4pbix25t"/>`,
		"fallback": "codicon:edit-compact",
	});
}

export default Component;
