import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxo1xc58t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxo1xc58t"/>`,
		"fallback": "bi:arrow-up-left-circle",
	});
}

export default Component;
