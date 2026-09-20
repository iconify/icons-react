import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4r4dxvcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4r4dxvcq"/>`,
		"fallback": "reicon:cart-large2-filled",
	});
}

export default Component;
