import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nggdf7y2k.css';
import '../../css/d/ds0cdnxye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nggdf7y2k"/><path class="ds0cdnxye"/></g>`,
		"fallback": "reicon:flag-2",
	});
}

export default Component;
