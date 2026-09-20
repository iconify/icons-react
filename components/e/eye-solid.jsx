import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9bk5cbdt.css';
import '../../css/k/k2_62w1sw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9bk5cbdt"/><path class="k2_62w1sw"/>`,
		"fallback": "pixel:eye-solid",
	});
}

export default Component;
