import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rxm2ijvwo.css';
import '../../css/h/h373szbjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rxm2ijvwo"/><path class="h373szbjt"/></g>`,
		"fallback": "iconoir:git-compare",
	});
}

export default Component;
