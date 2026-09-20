import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isok_lbpe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="isok_lbpe"/>`,
		"fallback": "lsicon:circle-close-filled",
	});
}

export default Component;
