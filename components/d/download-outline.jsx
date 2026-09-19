import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq84p-btl.css';
import '../../css/z/zurn3powf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lq84p-btl"/><path class="zurn3powf"/>`,
		"fallback": "basil:download-outline",
	});
}

export default Component;
