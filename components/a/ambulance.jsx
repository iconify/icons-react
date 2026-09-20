import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq_9v787t.css';
import '../../css/v/vp-9qc54u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eq_9v787t"/><path class="vp-9qc54u"/>`,
		"fallback": "vaadin:ambulance",
	});
}

export default Component;
