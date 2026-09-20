import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnf55gbpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnf55gbpo"/>`,
		"fallback": "keyline-icons:chart-line-fill",
	});
}

export default Component;
