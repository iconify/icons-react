import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aiut2o5jx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aiut2o5jx"/>`,
		"fallback": "ri:folder-5-line",
	});
}

export default Component;
