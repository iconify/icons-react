import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kartu-5sc.css';
import '../../css/b/b5i70gmxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kartu-5sc"/><path class="b5i70gmxj"/></g>`,
		"fallback": "tdesign:institution",
	});
}

export default Component;
