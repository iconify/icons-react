import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/njvarwbry.css';
import '../../css/u/usgifr2rf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="njvarwbry"/><path class="usgifr2rf"/></g>`,
		"fallback": "hugeicons:bubble-chat-income",
	});
}

export default Component;
