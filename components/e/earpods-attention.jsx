import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/duc0gu69f.css';
import '../../css/n/nu3pb0b1k.css';
import '../../css/c/c_9j593lb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duc0gu69f"/><path class="nu3pb0b1k"/><path class="c_9j593lb"/>`,
		"fallback": "streamline-freehand:earpods-attention",
	});
}

export default Component;
