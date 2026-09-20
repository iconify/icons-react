import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktonl8bjx.css';
import '../../css/h/h8ocnybfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktonl8bjx"/><path class="h8ocnybfe"/>`,
		"fallback": "mage:after-effects",
	});
}

export default Component;
