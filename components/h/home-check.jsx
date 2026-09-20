import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bqyhofsbw.css';
import '../../css/u/ui3ncabcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bqyhofsbw"/><path class="ui3ncabcp"/></g>`,
		"fallback": "mynaui:home-check",
	});
}

export default Component;
