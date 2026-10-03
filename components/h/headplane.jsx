import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6ankxbmd.css';
import '../../css/w/w951xmbwv.css';
import '../../css/e/ez4l1crno.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6ankxbmd"/><path class="w951xmbwv"/><path class="ez4l1crno"/>`,
		"fallback": "selfhst:headplane",
	});
}

export default Component;
