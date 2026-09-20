import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zn4q3lbdu.css';
import '../../css/e/efh1_8ous.css';
import '../../css/t/tiw_jlm-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="zn4q3lbdu"/><path class="efh1_8ous"/><path class="tiw_jlm-m"/></g>`,
		"fallback": "streamline-ultimate:design-file-text-image",
	});
}

export default Component;
