import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlw3_ib-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlw3_ib-p"/>`,
		"fallback": "iconaut:headset-solid",
	});
}

export default Component;
