import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx9sq5pnp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jx9sq5pnp"/>`,
		"fallback": "codicon:edit-code",
	});
}

export default Component;
