import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8w0l31rc.css';
import '../../css/z/zb3j6vxqp.css';
import '../../css/l/l_eotvg8k.css';
import '../../css/x/xpldmq40t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8w0l31rc"/><path class="zb3j6vxqp"/><path class="l_eotvg8k"/><path class="xpldmq40t"/>`,
		"fallback": "token:cph",
	});
}

export default Component;
