import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-mridb4l.css';
import '../../css/i/inzdek_cl.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-mridb4l"/><path class="inzdek_cl"/>`,
		"fallback": "lineicons:comments",
	});
}

export default Component;
