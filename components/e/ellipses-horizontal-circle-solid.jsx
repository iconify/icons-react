import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug90z1_fl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ug90z1_fl"/>`,
		"fallback": "pixel:ellipses-horizontal-circle-solid",
	});
}

export default Component;
