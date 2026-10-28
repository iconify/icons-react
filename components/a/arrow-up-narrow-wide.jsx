import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-iz7cb0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-iz7cb0g"/>`,
		"fallback": "vadivam:arrow-up-narrow-wide",
	});
}

export default Component;
