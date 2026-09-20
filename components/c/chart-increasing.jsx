import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zi9mmib_a.css';
import '../../css/l/lji3cgbti.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/k/kxjot_1jc.css';
import '../../css/a/ab8m_jbxj.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zi9mmib_a"/><path class="lji3cgbti"/><g class="ij2x_72vy"><path class="kxjot_1jc"/><path class="ab8m_jbxj"/></g>`,
		"fallback": "openmoji:chart-increasing",
	});
}

export default Component;
