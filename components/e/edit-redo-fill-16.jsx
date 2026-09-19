import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9ym0t80c.css';
import '../../css/a/ae-rsdbjc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9ym0t80c"/><path class="ae-rsdbjc"/>`,
		"fallback": "garden:edit-redo-fill-16",
	});
}

export default Component;
