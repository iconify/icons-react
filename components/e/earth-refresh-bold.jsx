import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob991ac-v.css';
import '../../css/l/lbnegcbec.css';
import '../../css/v/vneknnfuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ob991ac-v"/><path class="lbnegcbec"/><path class="vneknnfuw"/>`,
		"fallback": "streamline-ultimate:earth-refresh-bold",
	});
}

export default Component;
