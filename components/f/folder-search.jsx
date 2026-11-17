import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/w9-qfv_na.css';
import '../../css/y/yeqkjobjb.css';
import '../../css/v/vpt957bga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="w9-qfv_na"/><path class="yeqkjobjb"/><path class="vpt957bga"/></g>`,
		"fallback": "matita:folder-search",
	});
}

export default Component;
