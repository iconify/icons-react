import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cpdmdrvgj.css';
import '../../css/z/znf3e2q-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cpdmdrvgj"/><path class="znf3e2q-h"/></g>`,
		"fallback": "reicon:bookmarks",
	});
}

export default Component;
