import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eriz5_bkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eriz5_bkh"/>`,
		"fallback": "iconaut:chevrons-left-right-solid",
	});
}

export default Component;
