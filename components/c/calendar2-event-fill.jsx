import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nt02hebku.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nt02hebku"/>`,
		"fallback": "bi:calendar2-event-fill",
	});
}

export default Component;
