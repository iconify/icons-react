import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu5e9zo7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gu5e9zo7t"/>`,
		"fallback": "keyline-icons:case-sensitive-fill",
	});
}

export default Component;
