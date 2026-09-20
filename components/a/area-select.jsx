import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itbt_h6ys.css';
import '../../css/o/o5ayvslgh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itbt_h6ys"/><path class="o5ayvslgh"/>`,
		"fallback": "vaadin:area-select",
	});
}

export default Component;
