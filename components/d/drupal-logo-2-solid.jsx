import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr44hdc3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pr44hdc3q"/>`,
		"fallback": "streamline-logos:drupal-logo-2-solid",
	});
}

export default Component;
