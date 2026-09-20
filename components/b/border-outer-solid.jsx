import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wez0f6e8l.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wez0f6e8l"/>`,
		"fallback": "teenyicons:border-outer-solid",
	});
}

export default Component;
