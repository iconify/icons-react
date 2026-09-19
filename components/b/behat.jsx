import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw_m9ijfj.css';

const viewBox = {"width":385,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dw_m9ijfj"/>`,
		"fallback": "file-icons:behat",
	});
}

export default Component;
