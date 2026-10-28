import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s99g4i0sv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s99g4i0sv"/>`,
		"fallback": "vadivam:arrow-down-left",
	});
}

export default Component;
