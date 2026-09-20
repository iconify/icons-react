import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzdg_bqbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzdg_bqbm"/>`,
		"fallback": "mdi:battery-arrow-down-outline",
	});
}

export default Component;
