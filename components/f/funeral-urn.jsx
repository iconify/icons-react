import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/winqsjo_v.css';
import '../../css/f/ff_8d4bcz.css';
import '../../css/z/zsi7ldiai.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="winqsjo_v"/><path class="ff_8d4bcz"/><path class="zsi7ldiai"/></g>`,
		"fallback": "fluent-emoji-flat:funeral-urn",
	});
}

export default Component;
