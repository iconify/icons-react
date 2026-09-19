import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oozwqwb4x.css';
import '../../css/u/uzue040vi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oozwqwb4x"/><path class="uzue040vi"/></g>`,
		"fallback": "fluent-emoji-flat:green-apple",
	});
}

export default Component;
