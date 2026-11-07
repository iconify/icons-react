import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzdv_ccir.css';
import '../../css/x/x9-rwuyde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="zzdv_ccir"/><path class="x9-rwuyde"/>`,
		"fallback": "solar:golf-bold-duotone",
	});
}

export default Component;
