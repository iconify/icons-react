import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kk94-14if.css';
import '../../css/t/tjyrjeb2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kk94-14if"/><path clip-rule="evenodd" class="tjyrjeb2d"/>`,
		"fallback": "solar:eye-bold",
	});
}

export default Component;
