import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zc8ccm9by.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zc8ccm9by"/>`,
		"fallback": "ri:ai-generate-2-fill",
	});
}

export default Component;
