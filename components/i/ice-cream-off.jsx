import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv5wk7tjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cv5wk7tjf"/>`,
		"fallback": "tabler:ice-cream-off",
	});
}

export default Component;
