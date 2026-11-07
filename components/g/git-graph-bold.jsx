import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ey9xu1u9w.css';
import '../../css/z/zn204jbmn.css';
import '../../css/f/f01zc3pzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ey9xu1u9w"/><path class="zn204jbmn"/><path clip-rule="evenodd" class="f01zc3pzh"/>`,
		"fallback": "solar:git-graph-bold",
	});
}

export default Component;
