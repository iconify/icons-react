import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8jg2bc8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8jg2bc8j"/>`,
		"fallback": "coolicons:currency-dollar-duotone-round",
	});
}

export default Component;
