import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7pwbu_lf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7pwbu_lf"/>`,
		"fallback": "icons8:arrows-long-right",
	});
}

export default Component;
