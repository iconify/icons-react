import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbddd627w.css';
import '../../css/p/pia7y9bjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbddd627w"/><path class="pia7y9bjo"/>`,
		"fallback": "bxs:add-to-queue",
	});
}

export default Component;
