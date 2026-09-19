import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqbkv8u2i.css';
import '../../css/l/l1tdjlb-d.css';
import '../../css/b/b12gxvr_k.css';
import '../../css/r/r_6o9d_-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqbkv8u2i"/><circle class="l1tdjlb-d"/><circle class="b12gxvr_k"/><circle class="r_6o9d_-l"/>`,
		"fallback": "bx:bowling-ball",
	});
}

export default Component;
