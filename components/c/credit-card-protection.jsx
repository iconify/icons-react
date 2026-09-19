import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zc8lrbwyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zc8lrbwyr"/>`,
		"fallback": "griddy-icons:credit-card-protection",
	});
}

export default Component;
