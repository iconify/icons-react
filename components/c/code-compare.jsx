import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h09gf8bzf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h09gf8bzf"/>`,
		"fallback": "gravity-ui:code-compare",
	});
}

export default Component;
