import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l27dxibsi.css';
import '../../css/m/mpgu6g9gp.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l27dxibsi"/><path clip-rule="evenodd" class="mpgu6g9gp"/>`,
		"fallback": "lineicons:chevron-up-circle",
	});
}

export default Component;
