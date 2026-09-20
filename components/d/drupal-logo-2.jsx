import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/ovd4yacib.css';
import '../../css/x/xrbb7xb8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ovd4yacib"/><path class="xrbb7xb8z"/></g>`,
		"fallback": "streamline-logos:drupal-logo-2",
	});
}

export default Component;
