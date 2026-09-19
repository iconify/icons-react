import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0dxmwn6y.css';
import '../../css/h/h6dm1v_wt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0dxmwn6y"/><path class="h6dm1v_wt"/>`,
		"fallback": "fontisto:close",
	});
}

export default Component;
