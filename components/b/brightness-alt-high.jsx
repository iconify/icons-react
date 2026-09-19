import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x59z4hb7n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x59z4hb7n"/>`,
		"fallback": "bi:brightness-alt-high",
	});
}

export default Component;
