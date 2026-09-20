import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bf4v0abcn.css';
import '../../css/g/gmj67c7jw.css';
import '../../css/m/mgo8kyexx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bf4v0abcn"/><path class="gmj67c7jw"/><path class="mgo8kyexx"/></g>`,
		"fallback": "tdesign:folder-blocked",
	});
}

export default Component;
