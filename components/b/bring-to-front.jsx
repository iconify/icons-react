import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7p9wd7ce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7p9wd7ce"/>`,
		"fallback": "vadivam:bring-to-front",
	});
}

export default Component;
