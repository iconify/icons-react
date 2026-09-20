import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rd87fv_an.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rd87fv_an"/>`,
		"fallback": "temaki:bollard-row",
	});
}

export default Component;
