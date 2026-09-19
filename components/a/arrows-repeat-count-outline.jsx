import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_jjt_bql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_jjt_bql"/>`,
		"fallback": "flowbite:arrows-repeat-count-outline",
	});
}

export default Component;
