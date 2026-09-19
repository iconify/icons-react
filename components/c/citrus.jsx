import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/ruvu4yxzk.css';
import '../../css/i/i1cd8bsmc.css';
import '../../css/i/iexuhfb5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ruvu4yxzk"/><path class="i1cd8bsmc"/><path class="iexuhfb5w"/></g>`,
		"fallback": "hugeicons:citrus",
	});
}

export default Component;
