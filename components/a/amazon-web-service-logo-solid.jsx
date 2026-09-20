import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e96gj25qg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e96gj25qg"/>`,
		"fallback": "streamline-logos:amazon-web-service-logo-solid",
	});
}

export default Component;
