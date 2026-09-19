import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbehc1c4q.css';
import '../../css/w/wbqok5b7u.css';
import '../../css/d/dh8u4eiln.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbehc1c4q"/><path class="wbqok5b7u"/><path class="dh8u4eiln"/>`,
		"fallback": "flag:cd-4x3",
	});
}

export default Component;
