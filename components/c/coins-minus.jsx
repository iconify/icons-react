import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drupv_sdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drupv_sdw"/>`,
		"fallback": "mdi:coins-minus",
	});
}

export default Component;
