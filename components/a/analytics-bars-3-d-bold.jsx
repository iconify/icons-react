import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2-9esben.css';
import '../../css/w/w04o84byj.css';
import '../../css/d/dwzrjlbiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2-9esben"/><path class="w04o84byj"/><path class="dwzrjlbiu"/>`,
		"fallback": "streamline-ultimate:analytics-bars-3-d-bold",
	});
}

export default Component;
