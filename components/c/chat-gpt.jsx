import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xpu-vnblf.css';
import '../../css/z/z5cgwzb5l.css';
import '../../css/d/dtf8skboa.css';
import '../../css/h/h2rveyajs.css';
import '../../css/d/d366gyaub.css';
import '../../css/i/iqdp9ac3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xpu-vnblf"/><path class="z5cgwzb5l"/><path class="dtf8skboa"/><path class="h2rveyajs"/><path class="d366gyaub"/><path class="iqdp9ac3o"/></g>`,
		"fallback": "hugeicons:chat-gpt",
	});
}

export default Component;
