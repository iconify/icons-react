import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/msbovjbkh.css';
import '../../css/s/s5fsn4tdx.css';
import '../../css/u/uh01hzbyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="msbovjbkh"/><path class="s5fsn4tdx wm-a"/><path class="uh01hzbyb"/></g>`,
		"fallback": "withicons:chocolate-box-duo",
	});
}

export default Component;
