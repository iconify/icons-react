import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rj3mizb8u.css';
import '../../css/v/vzqaobcxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rj3mizb8u"/><path class="vzqaobcxq"/></g>`,
		"fallback": "streamline-ultimate:data-transfer-circle",
	});
}

export default Component;
