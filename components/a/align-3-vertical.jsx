import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lx6hsacbq.css';
import '../../css/w/wlzxvbbsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="lx6hsacbq"/><rect class="wlzxvbbsr"/></g>`,
		"fallback": "reicon:align-3-vertical",
	});
}

export default Component;
