import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owo73fbet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owo73fbet"/>`,
		"fallback": "vadivam:between-vertical-start",
	});
}

export default Component;
