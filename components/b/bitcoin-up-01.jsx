import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h3v3qrbfh.css';
import '../../css/x/x5tsncc-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h3v3qrbfh"/><path class="x5tsncc-n"/></g>`,
		"fallback": "hugeicons:bitcoin-up-01",
	});
}

export default Component;
