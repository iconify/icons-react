import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/z/zrulku3_c.css';
import '../../css/x/xggsp7bio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="zrulku3_c"/><path class="xggsp7bio"/></g>`,
		"fallback": "hugeicons:favourite-square",
	});
}

export default Component;
