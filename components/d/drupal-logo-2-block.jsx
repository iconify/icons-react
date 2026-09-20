import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6_er1b7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q6_er1b7o"/>`,
		"fallback": "streamline-logos:drupal-logo-2-block",
	});
}

export default Component;
