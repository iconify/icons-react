import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/goh2ztbxu.css';
import '../../css/o/oki7r90qi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="goh2ztbxu"/><path class="oki7r90qi"/></g>`,
		"fallback": "iconoir:antenna",
	});
}

export default Component;
