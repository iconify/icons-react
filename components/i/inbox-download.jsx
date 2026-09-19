import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/j/jeus15b5u.css';
import '../../css/o/ots0wtfha.css';
import '../../css/y/yq35rx1fi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="jeus15b5u"/><path class="ots0wtfha"/><path class="yq35rx1fi"/></g>`,
		"fallback": "hugeicons:inbox-download",
	});
}

export default Component;
