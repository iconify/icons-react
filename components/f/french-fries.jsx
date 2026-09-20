import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kxu6yhfrp.css';
import '../../css/s/s-ot-mb-r.css';
import '../../css/y/y4g6yyk9q.css';
import '../../css/e/e3dqhwb8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kxu6yhfrp"/><path class="s-ot-mb-r"/><path class="y4g6yyk9q"/><path class="e3dqhwb8i"/></g>`,
		"fallback": "streamline-cyber-color:french-fries",
	});
}

export default Component;
