import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sr5_dehzz.css';
import '../../css/p/pqy_qebbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sr5_dehzz"/><path class="pqy_qebbt"/></g>`,
		"fallback": "hugeicons:ai-game",
	});
}

export default Component;
