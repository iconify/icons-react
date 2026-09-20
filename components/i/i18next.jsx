import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asu33ccus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asu33ccus"/>`,
		"fallback": "thesvg-color:i18next",
	});
}

export default Component;
