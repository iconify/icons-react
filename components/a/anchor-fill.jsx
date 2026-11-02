import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjbyqm_dz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjbyqm_dz"/>`,
		"fallback": "mingcute:anchor-fill",
	});
}

export default Component;
