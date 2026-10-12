import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/ft3newbuc.css';
import '../../css/m/m_s4l22-d.css';
import '../../css/i/i6qlhhbth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ft3newbuc"/><rect class="m_s4l22-d"/><path class="i6qlhhbth"/></g>`,
		"fallback": "andrsrxn:error-401",
	});
}

export default Component;
