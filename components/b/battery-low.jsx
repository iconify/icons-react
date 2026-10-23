import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pn_uv_bxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pn_uv_bxr"/>`,
		"fallback": "vadivam:battery-low",
	});
}

export default Component;
