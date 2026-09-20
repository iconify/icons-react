import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klr151b3f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klr151b3f"/>`,
		"fallback": "octicon:arrow-down-16",
	});
}

export default Component;
