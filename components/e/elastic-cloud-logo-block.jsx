import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djpkk9btq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="djpkk9btq"/>`,
		"fallback": "streamline-logos:elastic-cloud-logo-block",
	});
}

export default Component;
