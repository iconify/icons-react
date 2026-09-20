import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uu_4-ac5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uu_4-ac5z"/>`,
		"fallback": "material-icon-theme:contributing",
	});
}

export default Component;
