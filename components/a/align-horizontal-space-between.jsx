import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwguu625s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwguu625s"/>`,
		"fallback": "vadivam:align-horizontal-space-between",
	});
}

export default Component;
