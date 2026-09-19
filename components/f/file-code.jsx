import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xa2h47dkv.css';
import '../../css/y/ykzxdyblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xa2h47dkv"/><path class="ykzxdyblb"/></g>`,
		"fallback": "hugeicons:file-code",
	});
}

export default Component;
