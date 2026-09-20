import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofquuccxv.css';
import '../../css/o/ozejtjb0s.css';
import '../../css/r/rz_gxrlbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofquuccxv"/><path class="ozejtjb0s"/><path class="rz_gxrlbh"/>`,
		"fallback": "pixel:eye-cross-solid",
	});
}

export default Component;
