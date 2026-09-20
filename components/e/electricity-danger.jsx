import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w6z4semhy.css';
import '../../css/b/brdkgxb0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w6z4semhy"/><path class="brdkgxb0o"/></g>`,
		"fallback": "mage:electricity-danger",
	});
}

export default Component;
