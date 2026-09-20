import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/houoq25gr.css';
import '../../css/i/iidgtubnu.css';
import '../../css/s/su0illb2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="houoq25gr"/><path class="iidgtubnu"/><path class="su0illb2z"/>`,
		"fallback": "prime:cloud-upload",
	});
}

export default Component;
