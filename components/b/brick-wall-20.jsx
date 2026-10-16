import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlf07hbzj.css';
import '../../css/w/w9mp4gb4o.css';
import '../../css/w/we5ze0blf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qlf07hbzj"/><path class="w9mp4gb4o"/><path class="we5ze0blf"/>`,
		"fallback": "energy-icons:brick-wall-20",
	});
}

export default Component;
