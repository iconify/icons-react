import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/h/h_u9dvzyh.css';
import '../../css/v/v9xq7ibdh.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="h_u9dvzyh"/><path class="v9xq7ibdh"/></g>`,
		"fallback": "marketeq:avocado-2",
	});
}

export default Component;
