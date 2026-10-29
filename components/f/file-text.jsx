import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlejs_b-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlejs_b-e"/>`,
		"fallback": "vadivam:file-text",
	});
}

export default Component;
