import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm12trbwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zm12trbwl"/>`,
		"fallback": "grommet-icons:amazon",
	});
}

export default Component;
