import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgwl94b-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgwl94b-d"/>`,
		"fallback": "iconaut:euro-solid",
	});
}

export default Component;
