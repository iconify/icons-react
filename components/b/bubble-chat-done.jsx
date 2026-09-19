import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/njvarwbry.css';
import '../../css/g/gy7e7lbaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="njvarwbry"/><path class="gy7e7lbaz"/></g>`,
		"fallback": "hugeicons:bubble-chat-done",
	});
}

export default Component;
