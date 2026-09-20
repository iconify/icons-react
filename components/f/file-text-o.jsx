import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oe3oz-bur.css';
import '../../css/w/wejxf_ubc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oe3oz-bur"/><path class="wejxf_ubc"/>`,
		"fallback": "vaadin:file-text-o",
	});
}

export default Component;
