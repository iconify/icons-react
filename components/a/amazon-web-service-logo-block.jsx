import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0gm6abzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k0gm6abzd"/>`,
		"fallback": "streamline-logos:amazon-web-service-logo-block",
	});
}

export default Component;
