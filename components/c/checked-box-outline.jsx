import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny4kt2vec.css';
import '../../css/i/i_o33ybmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ny4kt2vec"/><path class="i_o33ybmm"/>`,
		"fallback": "basil:checked-box-outline",
	});
}

export default Component;
