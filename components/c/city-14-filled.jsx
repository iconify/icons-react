import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzsbmhebc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzsbmhebc"/>`,
		"fallback": "tdesign:city-14-filled",
	});
}

export default Component;
