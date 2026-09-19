import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/n79oo2g7g.css';
import '../../css/g/g9bey28zn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="n79oo2g7g"/><path class="g9bey28zn"/></g>`,
		"fallback": "iconoir:ethereum-circle",
	});
}

export default Component;
