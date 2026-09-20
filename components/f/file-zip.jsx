import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwmdc8b7j.css';
import '../../css/y/y5nzee3jx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwmdc8b7j"/><path class="y5nzee3jx"/>`,
		"fallback": "vaadin:file-zip",
	});
}

export default Component;
