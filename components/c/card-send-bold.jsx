import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zym4i3bis.css';
import '../../css/g/gafy37gmj.css';
import '../../css/i/ibt6e9bfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zym4i3bis"/><path class="gafy37gmj"/><path clip-rule="evenodd" class="ibt6e9bfd"/></g>`,
		"fallback": "solar:card-send-bold",
	});
}

export default Component;
