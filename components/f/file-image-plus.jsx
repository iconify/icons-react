import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eej_e7vke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eej_e7vke"/>`,
		"fallback": "noviair:file-image-plus",
	});
}

export default Component;
