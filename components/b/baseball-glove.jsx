import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgw_3z_ad.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgw_3z_ad"/>`,
		"fallback": "game-icons:baseball-glove",
	});
}

export default Component;
