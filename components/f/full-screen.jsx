import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqmje5bmd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqmje5bmd"/>`,
		"fallback": "ooui:full-screen",
	});
}

export default Component;
