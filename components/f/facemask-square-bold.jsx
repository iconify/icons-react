import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7cgpkozd.css';
import '../../css/p/phhpx_u6x.css';
import '../../css/y/ysaow14pl.css';
import '../../css/d/d7-qycd0c.css';
import '../../css/v/vk8pb18_w.css';
import '../../css/v/v3tvhri0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7cgpkozd"/><path class="phhpx_u6x"/><path class="ysaow14pl"/><path class="d7-qycd0c"/><path class="vk8pb18_w"/><path clip-rule="evenodd" class="v3tvhri0i"/>`,
		"fallback": "solar:facemask-square-bold",
	});
}

export default Component;
