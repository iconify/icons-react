import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv_x2xbvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bv_x2xbvs"/>`,
		"fallback": "tabler:brand-blackbery",
	});
}

export default Component;
