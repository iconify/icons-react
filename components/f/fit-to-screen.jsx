import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j8akqrsii.css';
import '../../css/y/ye1r-f9wo.css';
import '../../css/v/vtd0ijb2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j8akqrsii"/><path class="ye1r-f9wo"/><path class="vtd0ijb2e"/></g>`,
		"fallback": "andrsrxn:fit-to-screen",
	});
}

export default Component;
