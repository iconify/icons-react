import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x54q-ebok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x54q-ebok"/>`,
		"fallback": "ri:checkbox-line",
	});
}

export default Component;
