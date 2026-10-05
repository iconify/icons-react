import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/r/r43dgsbqa.css';
import '../../css/s/sgmbzabxq.css';
import '../../css/s/sgxw2e1xb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="r43dgsbqa"/><path class="sgmbzabxq"/><path class="sgxw2e1xb"/></g>`,
		"fallback": "matita:headphones",
	});
}

export default Component;
