import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df7_jw1qt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df7_jw1qt"/>`,
		"fallback": "at-icons:field-of-view",
	});
}

export default Component;
