import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s43y9hb-k.css';
import '../../css/w/wqz8cobop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s43y9hb-k"/><path class="wqz8cobop"/>`,
		"fallback": "bx:detail",
	});
}

export default Component;
