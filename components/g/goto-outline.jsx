import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqq645bio.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqq645bio"/>`,
		"fallback": "lsicon:goto-outline",
	});
}

export default Component;
