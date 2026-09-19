import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqvvagbsw.css';
import '../../css/v/v91_u-bmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqvvagbsw"/><path class="v91_u-bmv"/>`,
		"fallback": "bxl:instagram-alt",
	});
}

export default Component;
