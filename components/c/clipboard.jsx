import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b8opj0i7z.css';
import '../../css/x/xptr09bzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b8opj0i7z"/><path class="xptr09bzt"/></g>`,
		"fallback": "mynaui:clipboard",
	});
}

export default Component;
