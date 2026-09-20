import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdvvlcb5x.css';
import '../../css/s/s6i82o90q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdvvlcb5x"/><path class="s6i82o90q"/>`,
		"fallback": "selfhst:hyvor-relay-light",
	});
}

export default Component;
