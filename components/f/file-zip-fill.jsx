import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqx5vab9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqx5vab9y"/>`,
		"fallback": "ri:file-zip-fill",
	});
}

export default Component;
