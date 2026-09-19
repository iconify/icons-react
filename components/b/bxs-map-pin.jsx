import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spzykfbbj.css';
import '../../css/c/cdisl5apr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spzykfbbj"/><path class="cdisl5apr"/>`,
		"fallback": "bx:bxs-map-pin",
	});
}

export default Component;
