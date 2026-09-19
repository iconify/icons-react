import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/alo70ezch.css';
import '../../css/w/wwhsvn6bz.css';
import '../../css/x/x8-viqewl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="alo70ezch"/><circle class="wwhsvn6bz"/><path class="x8-viqewl"/></g>`,
		"fallback": "charm:glasses",
	});
}

export default Component;
