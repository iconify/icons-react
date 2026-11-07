import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j08vyhzaj.css';
import '../../css/l/l531-vi_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j08vyhzaj"/><path class="l531-vi_a"/>`,
		"fallback": "solar:cloud-download-outline",
	});
}

export default Component;
