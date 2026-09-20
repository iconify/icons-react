import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1t-cvl_x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l1t-cvl_x"/>`,
		"fallback": "lsicon:align-txt-center-filled",
	});
}

export default Component;
