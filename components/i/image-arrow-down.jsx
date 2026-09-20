import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_oajib1w.css';
import '../../css/m/mur108jyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_oajib1w"/><path class="mur108jyx"/>`,
		"fallback": "stash:image-arrow-down",
	});
}

export default Component;
