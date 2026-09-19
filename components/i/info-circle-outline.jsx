import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pakn2i1un.css';
import '../../css/y/yxx4r0hjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pakn2i1un"/><path clip-rule="evenodd" class="yxx4r0hjj"/>`,
		"fallback": "basil:info-circle-outline",
	});
}

export default Component;
