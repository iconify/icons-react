import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdsdcjb-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdsdcjb-x"/>`,
		"fallback": "mdi:file-image-add",
	});
}

export default Component;
