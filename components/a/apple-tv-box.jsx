import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghl62r_kn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghl62r_kn"/>`,
		"fallback": "cbi:apple-tv-box",
	});
}

export default Component;
