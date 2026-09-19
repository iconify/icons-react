import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbbhu27xv.css';
import '../../css/x/xhhedbbop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbbhu27xv"/><path class="xhhedbbop"/>`,
		"fallback": "bxl:drupal",
	});
}

export default Component;
