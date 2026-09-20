import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/ak0rcjbsu.css';
import '../../css/v/v2z-67h7w.css';
import '../../css/u/urmy35bvg.css';
import '../../css/l/l8pepzbhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ak0rcjbsu"/><path class="v2z-67h7w"/><path class="urmy35bvg"/><path class="l8pepzbhf"/></g>`,
		"fallback": "reicon:cpu-setting",
	});
}

export default Component;
