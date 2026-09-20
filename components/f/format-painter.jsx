import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zf7z3sb0u.css';
import '../../css/o/o_nv49bra.css';
import '../../css/w/wek3qlbsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zf7z3sb0u"/><path class="o_nv49bra"/><path class="wek3qlbsb"/></g>`,
		"fallback": "tdesign:format-painter",
	});
}

export default Component;
