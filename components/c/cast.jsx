import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p07tmccvv.css';
import '../../css/r/rsa077bjb.css';
import '../../css/k/k0sv_yafg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p07tmccvv"><path class="rsa077bjb"/><path class="k0sv_yafg"/></g>`,
		"fallback": "tdesign:cast",
	});
}

export default Component;
