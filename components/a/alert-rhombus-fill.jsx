import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/baly-1ssn.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="baly-1ssn"/>`,
		"fallback": "memory:alert-rhombus-fill",
	});
}

export default Component;
