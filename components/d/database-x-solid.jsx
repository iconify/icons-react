import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crs_a_bfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crs_a_bfw"/>`,
		"fallback": "iconaut:database-x-solid",
	});
}

export default Component;
