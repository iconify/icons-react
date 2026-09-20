import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/djr7vwbwa.css';
import '../../css/g/ge8ychw1v.css';
import '../../css/r/r6om_5jhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="djr7vwbwa"/><path class="ge8ychw1v"/><path class="r6om_5jhk"/></g>`,
		"fallback": "streamline-ultimate:ice-cream-cone",
	});
}

export default Component;
