import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/muph4f-qa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="muph4f-qa"/>`,
		"fallback": "reicon:house-alt-filled",
	});
}

export default Component;
