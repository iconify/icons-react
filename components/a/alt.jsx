import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6wlm125p.css';
import '../../css/m/m2_snib1d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6wlm125p"/><path class="m2_snib1d"/>`,
		"fallback": "vaadin:alt",
	});
}

export default Component;
