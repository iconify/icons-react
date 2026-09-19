import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6cipq81a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6cipq81a"/>`,
		"fallback": "bi:inbox-fill",
	});
}

export default Component;
