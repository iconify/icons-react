import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm9476rqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rm9476rqi"/>`,
		"fallback": "griddy-icons:check-circle-alt-01",
	});
}

export default Component;
