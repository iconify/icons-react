import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/ie6pw71gv.css';
import '../../css/f/fq-z0gh7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ie6pw71gv"/><path class="fq-z0gh7f"/></g>`,
		"fallback": "iconoir:folder-alert",
	});
}

export default Component;
