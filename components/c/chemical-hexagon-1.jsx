import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/c/c60z1zbhc.css';
import '../../css/i/ilswne8-p.css';
import '../../css/w/w37c0mbky.css';
import '../../css/d/d-wthpbnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="c60z1zbhc"/><path class="ilswne8-p"/><path class="w37c0mbky"/><path class="d-wthpbnq"/></g>`,
		"fallback": "streamline-ultimate:chemical-hexagon-1",
	});
}

export default Component;
