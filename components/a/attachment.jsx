import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubm57g7cb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubm57g7cb"/>`,
		"fallback": "gg:attachment",
	});
}

export default Component;
