import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dkluoqgfn.css';
import '../../css/z/zc9r-_b8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dkluoqgfn"/><path class="zc9r-_b8a"/></g>`,
		"fallback": "iconoir:cut-solid-with-curve",
	});
}

export default Component;
