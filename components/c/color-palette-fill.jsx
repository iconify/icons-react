import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwv3yflix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwv3yflix"/>`,
		"fallback": "eva:color-palette-fill",
	});
}

export default Component;
