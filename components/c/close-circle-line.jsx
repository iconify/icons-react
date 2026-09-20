import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkyvt9bmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkyvt9bmb"/>`,
		"fallback": "si:close-circle-line",
	});
}

export default Component;
