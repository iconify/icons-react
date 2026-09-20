import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vp3m4ccrt.css';
import '../../css/h/hxh66nbjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vp3m4ccrt"/><path class="hxh66nbjs"/></g>`,
		"fallback": "reicon:cd",
	});
}

export default Component;
