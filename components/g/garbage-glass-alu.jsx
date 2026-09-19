import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcdf_tb6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcdf_tb6d"/>`,
		"fallback": "cbi:garbage-glass-alu",
	});
}

export default Component;
