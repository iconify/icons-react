import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sntj-vbej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sntj-vbej"/>`,
		"fallback": "streamline-logos:affinity-photo-logo",
	});
}

export default Component;
