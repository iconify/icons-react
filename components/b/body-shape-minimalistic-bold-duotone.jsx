import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k39o4pb0d.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/a/a0o04vbkk.css';
import '../../css/z/zskz7hbfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k39o4pb0d"/><g class="xtpeb-edw"><path class="a0o04vbkk"/><path class="zskz7hbfw"/></g>`,
		"fallback": "solar:body-shape-minimalistic-bold-duotone",
	});
}

export default Component;
