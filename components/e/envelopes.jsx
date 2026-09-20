import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to33eh6vt.css';
import '../../css/t/t6ndzsb3y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to33eh6vt"/><path class="t6ndzsb3y"/>`,
		"fallback": "vaadin:envelopes",
	});
}

export default Component;
