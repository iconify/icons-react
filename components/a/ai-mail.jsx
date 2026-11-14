import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w6b3lzbgx.css';
import '../../css/s/sr_zc7bwn.css';
import '../../css/d/dd5nscbtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w6b3lzbgx"/><path class="sr_zc7bwn"/><path class="dd5nscbtu"/></g>`,
		"fallback": "hugeicons:ai-mail",
	});
}

export default Component;
