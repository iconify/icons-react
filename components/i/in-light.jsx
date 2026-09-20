import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hu4ejubzl.css';
import '../../css/b/bjb6gbc1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hu4ejubzl"/><path class="bjb6gbc1i"/></g>`,
		"fallback": "lets-icons:in-light",
	});
}

export default Component;
