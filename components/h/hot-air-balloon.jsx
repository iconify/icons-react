import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fb2ngd4wa.css';
import '../../css/y/yy-65r22i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fb2ngd4wa"/><path class="yy-65r22i"/></g>`,
		"fallback": "lucide:hot-air-balloon",
	});
}

export default Component;
