import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjlovbc4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjlovbc4x"/>`,
		"fallback": "thesvg-color:gnome",
	});
}

export default Component;
