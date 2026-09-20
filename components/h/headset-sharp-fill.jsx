import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/l4l2bivlj.css';
import '../../css/f/fuzt8obdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="l4l2bivlj"/><path class="fuzt8obdb"/></g>`,
		"fallback": "keyline-icons:headset-sharp-fill",
	});
}

export default Component;
