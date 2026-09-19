import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dxr_iubao.css';
import '../../css/y/ykzxdyblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dxr_iubao"/><path class="ykzxdyblb"/></g>`,
		"fallback": "hugeicons:file-search",
	});
}

export default Component;
