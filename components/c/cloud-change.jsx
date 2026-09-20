import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v7qjmubxj.css';
import '../../css/c/c438zfb4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v7qjmubxj"/><path class="c438zfb4k"/></g>`,
		"fallback": "reicon:cloud-change",
	});
}

export default Component;
