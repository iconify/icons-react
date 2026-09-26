import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fv_qtobhp.css';
import '../../css/z/zz_clmbsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fv_qtobhp"/><path class="zz_clmbsh"/></g>`,
		"fallback": "solar:file-audio-line-duotone",
	});
}

export default Component;
