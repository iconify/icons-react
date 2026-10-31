import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/v/vki7dtbal.css';
import '../../css/h/hjx5qrdsr.css';
import '../../css/w/wabd8kb8q.css';
import '../../css/w/w49ngccqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="vki7dtbal"/><path class="hjx5qrdsr wm-k"/><path class="wabd8kb8q wm-a"/><path class="w49ngccqq wm-deco"/></g>`,
		"fallback": "withicons-kawaii:citrus",
	});
}

export default Component;
