import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bd77njbqt.css';
import '../../css/y/y__863ctc.css';
import '../../css/c/cv06d6bir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bd77njbqt"/><path class="y__863ctc"/><path class="cv06d6bir"/></g>`,
		"fallback": "hugeicons:algorithm",
	});
}

export default Component;
