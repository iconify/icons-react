import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_o4c-fyf.css';
import '../../css/b/bafc_qt6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_o4c-fyf"/><path class="bafc_qt6d"/>`,
		"fallback": "pixel:eye",
	});
}

export default Component;
