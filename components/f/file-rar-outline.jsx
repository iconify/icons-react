import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4bdpbc2u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4bdpbc2u"/>`,
		"fallback": "lsicon:file-rar-outline",
	});
}

export default Component;
