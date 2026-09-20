import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bsud-sbpm.css';
import '../../css/h/hr-px_ssx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bsud-sbpm"/><path class="hr-px_ssx"/></g>`,
		"fallback": "tdesign:contrast-1",
	});
}

export default Component;
