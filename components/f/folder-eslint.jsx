import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6cjc0bct.css';
import '../../css/y/yeqdc6tqx.css';
import '../../css/s/sl3kvfb0b.css';
import '../../css/n/nis4xpbpc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6cjc0bct"/><g class="yeqdc6tqx"><path class="sl3kvfb0b"/><path class="nis4xpbpc"/></g>`,
		"fallback": "material-icon-theme:folder-eslint",
	});
}

export default Component;
