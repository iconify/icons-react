import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kub79kb4f.css';
import '../../css/n/nhij4gz1o.css';
import '../../css/d/dq_x0bcxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kub79kb4f"/><path class="nhij4gz1o"/><path class="dq_x0bcxw"/></g>`,
		"fallback": "tdesign:draft",
	});
}

export default Component;
