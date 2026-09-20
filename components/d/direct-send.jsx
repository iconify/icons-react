import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/buo0j4o3v.css';
import '../../css/a/ayno9gbxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="buo0j4o3v"/><path class="ayno9gbxm"/></g>`,
		"fallback": "reicon:direct-send",
	});
}

export default Component;
