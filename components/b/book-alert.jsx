import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/icjlvdb0c.css';
import '../../css/z/zdef07bdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="icjlvdb0c"/><path class="zdef07bdp"/></g>`,
		"fallback": "hugeicons:book-alert",
	});
}

export default Component;
