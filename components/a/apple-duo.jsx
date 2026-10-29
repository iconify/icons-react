import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/istk6nbhj.css';
import '../../css/q/qqyh0cb9q.css';
import '../../css/e/eumle_byd.css';
import '../../css/z/z0l13u7rz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="istk6nbhj"/><path class="qqyh0cb9q wm-a"/><path class="eumle_byd wm-a"/><path class="z0l13u7rz"/></g>`,
		"fallback": "withicons:apple-duo",
	});
}

export default Component;
