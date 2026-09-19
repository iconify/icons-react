import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhe7-4bym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhe7-4bym"/>`,
		"fallback": "ci:arrow-circle-down-right",
	});
}

export default Component;
