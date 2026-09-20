import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aph27i7aq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aph27i7aq"/>`,
		"fallback": "ri:input-method-line",
	});
}

export default Component;
