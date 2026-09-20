import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kbgz6y3wy.css';
import '../../css/o/osse7rbff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kbgz6y3wy"/><path class="osse7rbff"/></g>`,
		"fallback": "reicon:file-content",
	});
}

export default Component;
