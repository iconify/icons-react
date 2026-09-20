import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/aabazgbha.css';
import '../../css/j/jr1wrxbfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="aabazgbha"/><path class="jr1wrxbfo"/></g>`,
		"fallback": "streamline-ultimate:composition-focus-square",
	});
}

export default Component;
