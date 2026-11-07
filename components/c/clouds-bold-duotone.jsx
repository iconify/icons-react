import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czdsxrb2c.css';
import '../../css/e/ewaos-x_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czdsxrb2c"/><path class="ewaos-x_y"/>`,
		"fallback": "solar:clouds-bold-duotone",
	});
}

export default Component;
