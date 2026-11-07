import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd-1mab0x.css';
import '../../css/u/uypdg1btw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vd-1mab0x"/><path class="uypdg1btw"/>`,
		"fallback": "solar:document-2-bold",
	});
}

export default Component;
