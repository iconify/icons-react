import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au8fi6b2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="au8fi6b2d"/>`,
		"fallback": "thesvg:exa",
	});
}

export default Component;
