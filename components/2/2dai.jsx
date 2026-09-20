import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/op6-5trqx.css';
import '../../css/k/kufg_y_4u.css';
import '../../css/d/dl849rwsk.css';
import '../../css/u/uh_58qkir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="op6-5trqx"/><path class="kufg_y_4u"/><path clip-rule="evenodd" class="dl849rwsk"/><path clip-rule="evenodd" class="uh_58qkir"/>`,
		"fallback": "token:2dai",
	});
}

export default Component;
