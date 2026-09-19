import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/v/v1wdvab0g.css';
import '../../css/t/tpkjv3fwv.css';
import '../../css/j/jmwngv4zd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="v1wdvab0g"/><path class="tpkjv3fwv"/><path class="jmwngv4zd"/></g>`,
		"fallback": "hugeicons:bowling",
	});
}

export default Component;
