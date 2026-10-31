import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcxv7rblj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcxv7rblj"/>`,
		"fallback": "withicons:globe-gloss",
	});
}

export default Component;
