import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_mj2m24j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_mj2m24j"/>`,
		"fallback": "oui:editor-link",
	});
}

export default Component;
