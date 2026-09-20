import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw0com05s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aw0com05s"/>`,
		"fallback": "si:align-horiz-center-simple-fill",
	});
}

export default Component;
