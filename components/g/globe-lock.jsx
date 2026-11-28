import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsqcs4bxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsqcs4bxu"/>`,
		"fallback": "noviair-light:globe-lock",
	});
}

export default Component;
