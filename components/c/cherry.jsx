import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/y/yzgjpubpd.css';
import '../../css/w/wysaapbjo.css';
import '../../css/v/vrm34f8gd.css';
import '../../css/o/ows2wwb4n.css';
import '../../css/q/qsxczfb-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="yzgjpubpd"/><path class="wm-shine wysaapbjo"/><path class="vrm34f8gd wm-k"/><path class="ows2wwb4n wm-a"/><path class="qsxczfb-k wm-deco"/></g>`,
		"fallback": "withicons-kawaii:cherry",
	});
}

export default Component;
